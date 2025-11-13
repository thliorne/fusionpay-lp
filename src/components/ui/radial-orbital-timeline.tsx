
"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

function CircleAction({
  label,
  icon,
  onClick,
  isMobile,
}: {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isMobile: boolean;
}) {
  const reduce = useReducedMotion();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const sizeClasses = isMobile ? "size-20" : "size-24 sm:size-28";
  const iconSize = isMobile ? 24 : 32;

  if (!isClient) {
    return (
      <div
        className={`${sizeClasses} rounded-full bg-[#0B0B0B]/80 ring-1 ring-white/15`}
      />
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        `group relative isolate grid place-items-center rounded-full
                 bg-[#0B0B0B]/80 ring-1 ring-white/15 text-white/90 cursor-pointer
                 transition-transform duration-200 ease-out outline-none`,
        sizeClasses
      )}
      whileHover={!reduce ? { scale: 1.04 } : {}}
      whileTap={!reduce ? { scale: 0.98 } : {}}
      transition={{ duration: reduce ? 0 : 0.18, ease: "easeOut" }}
    >
      <div className="relative z-10 flex flex-col items-center gap-2">
        <span className="text-orange-400">
          {React.cloneElement(icon as React.ReactElement, { size: iconSize })}
        </span>
        <span className="text-xs font-semibold tracking-wide text-white/85 text-center px-1">
          {label}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15" />

      {!reduce && (
        <>
          <div
            className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
            style={{ boxShadow: "0 0 24px 4px rgba(255,87,34,0.28)" }}
          />
        </>
      )}

      <div className="pointer-events-none absolute inset-0 rounded-full [box-shadow:inset_0_10px_30px_rgba(0,0,0,0.45)]" />
    </motion.button>
  );
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );

  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [isClient, setIsClient] = useState(false);
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  const isAnyCardOpen = activeNodeId !== null;

  const notificationIcon = PlaceHolderImages.find(
    (p) => p.id === "notification-icon"
  );

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (reduceMotion) {
      setAutoRotate(false);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, [reduceMotion]);

  useEffect(() => {
    let animationFrameId: number;
    if (autoRotate && !isAnyCardOpen && !reduceMotion) {
      const animate = () => {
        setRotationAngle((prev) => (prev + 0.1) % 360);
        animationFrameId = requestAnimationFrame(animate);
      };
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [autoRotate, isAnyCardOpen, reduceMotion]);

  const closeAllCards = () => {
    setExpandedItems({});
    setActiveNodeId(null);
    if (!reduceMotion) setAutoRotate(true);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAllCards();
      }
    };

    if (isAnyCardOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAnyCardOpen]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAnyCardOpen) {
      const target = e.target as HTMLElement;
      if (
        !target.closest(".card-container") &&
        !target.closest(".node-container")
      ) {
        closeAllCards();
      }
    }
  };

  const centerViewOnNode = (nodeId: number) => {
    if (reduceMotion || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    if (nodeIndex === -1) return;

    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    // Set rotation to bring the selected node to the top (270 degrees)
    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id: number) => {
    const isCurrentlyExpanded = !!expandedItems[id];

    if (activeNodeId !== null && activeNodeId !== id) {
      // An item is open, and we're clicking a different one
      setExpandedItems({ [id]: true });
      setActiveNodeId(id);
      setAutoRotate(false);
      centerViewOnNode(id);
    } else {
      // Clicking the same item or no item is open
      setExpandedItems((prev) => ({ ...prev, [id]: !isCurrentlyExpanded }));
      if (!isCurrentlyExpanded) {
        setActiveNodeId(id);
        setAutoRotate(false);
        centerViewOnNode(id);
      } else {
        closeAllCards();
      }
    }
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;

    const radiusValue = isClient
      ? isMobile
        ? Math.min(window.innerWidth * 0.4, 180)
        : Math.min(Math.max(window.innerWidth * 0.25, 220), 320)
      : 140;

    const radian = (angle * Math.PI) / 180;

    const x = radiusValue * Math.cos(radian);
    const y = radiusValue * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.sin(radian));
    const opacity = reduceMotion
      ? 1
      : Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    const scale = reduceMotion
      ? 1
      : 0.8 + 0.2 * ((1 + Math.sin(radian)) / 2);

    return { x, y, zIndex, opacity, scale };
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-black bg-primary border-primary/50";
      case "in-progress":
        return "text-white bg-blue-500 border-blue-500/50";
      case "pending":
        return "text-white/80 bg-white/20 border-white/30";
      default:
        return "text-white/80 bg-white/20 border-white/30";
    }
  };

  const getStatusText = (status: TimelineItem["status"]): string => {
    if (status === "completed") {
      return "Completado";
    }
    return status.replace("-", " ");
  };

  return (
    <TooltipProvider>
      <div
        className="w-full pt-20 pb-32 flex flex-col items-center justify-center text-white overflow-hidden relative"
        onClick={handleContainerClick}
      >
        {isAnyCardOpen && (
          <div
            className="fixed inset-0 z-30 bg-transparent"
            onClick={closeAllCards}
          />
        )}

        <div className="text-center mb-16 sm:mb-24 z-20 px-4">
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-primary">
            <Zap className="w-4 h-4" />
            QUEM SOMOS
          </div>
          <h2
            id="diferenciais-title"
            className="text-[clamp(2rem,6vw,3.125rem)] font-bold tracking-tighter leading-tight"
          >
            <span className="text-white">Conheça a</span>{" "}
            <span className="relative inline-block text-primary">
              Fusion Pay
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-primary/70 rounded-full blur-[6px]"></span>
            </span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-[clamp(1rem,4vw,1.125rem)] leading-relaxed text-white">
            Somos mais que um gateway de pagamento. Somos o parceiro estratégico
            que impulsiona o crescimento do seu negócio digital.
          </p>
        </div>

        <div className="relative w-full flex items-center justify-center z-10 h-[80vh] min-h-[500px] sm:min-h-[600px] max-h-[800px] md:h-[600px] lg:h-[800px]">
          <motion.div
            className="absolute z-20 grid place-items-center"
            animate={{ scale: isAnyCardOpen ? 0.8 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              {isClient && !reduceMotion && !isAnyCardOpen && (
                <>
                  <div
                    className="absolute inset-[-40%] border border-primary/30 rounded-full animate-pulse opacity-80"
                    style={{ animationDuration: "4s" }}
                  ></div>
                  <div
                    className="absolute inset-[-60%] border border-primary/20 rounded-full animate-pulse opacity-60"
                    style={{ animationDelay: "1s", animationDuration: "4s" }}
                  ></div>
                </>
              )}
              {notificationIcon && (
                <Image
                  src={notificationIcon.imageUrl}
                  alt={notificationIcon.description}
                  width={isMobile ? 80 : 96}
                  height={isMobile ? 80 : 96}
                  className="w-full h-full rounded-full object-cover bg-black/50 p-2"
                  data-ai-hint={notificationIcon.imageHint}
                />
              )}
            </div>
          </motion.div>
          <motion.div
            className="absolute w-[80vw] h-[80vw] sm:w-[70vw] sm:h-[70vw] max-w-[800px] max-h-[800px] rounded-full border border-border/20 transition-transform duration-700 ease-in-out"
            style={{ transform: `rotate(${rotationAngle}deg) scale(${isAnyCardOpen ? 0.9 : 1})` }}
          ></motion.div>

          {isClient &&
            timelineData.map((item, index) => {
              const isExpanded = expandedItems[item.id];
              const Icon = item.icon;
              const { x, y, zIndex, opacity, scale } = calculateNodePosition(
                index,
                timelineData.length
              );

              return (
                <motion.div
                  key={item.id}
                  ref={(el) => (nodeRefs.current[item.id] = el)}
                  className="absolute transition-opacity duration-700 ease-in-out node-container"
                  style={{
                    willChange: "transform, opacity, z-index",
                    transform: `translate(${x}px, ${y}px) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <CircleAction
                          label={item.title}
                          icon={<Icon />}
                          onClick={(e: any) => {
                            e.stopPropagation();
                            toggleItem(item.id);
                          }}
                          isMobile={isMobile}
                        />
                      </div>
                    </TooltipTrigger>
                    {!isExpanded && (
                      <TooltipContent>
                        <p>Clique para ver detalhes</p>
                      </TooltipContent>
                    )}
                  </Tooltip>

                  {isExpanded && (
                    <Card
                      className="card-container absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 w-72 bg-black/80 backdrop-blur-lg border-border/80 shadow-xl shadow-black/20 overflow-visible z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-border/80"></div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <Badge
                            className={`px-2 py-0.5 text-xs ${getStatusStyles(
                              item.status
                            )}`}
                          >
                            {getStatusText(item.status)}
                          </Badge>
                          <span className="text-xs font-mono text-white">
                            {item.date}
                          </span>
                        </div>
                        <CardTitle className="text-lg mt-2 text-white">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-white">
                        <p>{item.content}</p>

                        <div className="mt-4 pt-3 border-t border-border/50">
                          <div className="flex justify-between items-center text-xs mb-1">
                            <span className="flex items-center">
                              <Zap size={12} className="mr-1 text-primary" />
                              Energy Level
                            </span>
                            <span className="font-mono text-white">
                              {item.energy}%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary/50 to-primary"
                              style={{ width: `${item.energy}%` }}
                            ></div>
                          </div>
                        </div>

                        {item.relatedIds.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-border/50">
                            <div className="flex items-center mb-2">
                              <LinkIcon
                                size={12}
                                className="text-white mr-1"
                              />
                              <h4 className="text-sm uppercase tracking-wider font-medium text-white">
                                Connected Nodes
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {item.relatedIds.map((relatedId) => {
                                const relatedItem = timelineData.find(
                                  (i) => i.id === relatedId
                                );
                                return (
                                  <Button
                                    key={relatedId}
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center h-7 px-2.5 py-1 text-xs rounded-md border-border bg-transparent hover:bg-accent text-white hover:text-accent-foreground transition-all"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleItem(relatedId);
                                    }}
                                  >
                                    {relatedItem?.title}
                                    <ArrowRight
                                      size={10}
                                      className="ml-1.5 text-white"
                                    />
                                  </Button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              );
            })}
        </div>
      </div>
    </TooltipProvider>
  );
}

    