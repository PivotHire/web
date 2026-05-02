"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextSegment {
    text: string;
    refId?: number;
}

interface Paragraph {
    segments: TextSegment[];
    footnote?: { id: number; note: string };
}

const paragraphs: Paragraph[] = [
    {
        footnote: { id: 1, note: "Smith et al., 2024" },
        segments: [
            { text: "We propose a novel approach building on recent " },
            { text: "Foundation Models", refId: 1 },
            { text: " that demonstrate state-of-the-art performance. The architecture leverages pre-trained representations to enable zero-shot transfer across diverse manipulation tasks." },
        ],
    },
    {
        segments: [
            { text: "Our method decomposes long-horizon manipulation into a sequence of semantic stages, each governed by a learned advantage function that ensures measurable progress toward the goal state." },
        ],
    },
    {
        footnote: { id: 2, note: "OpenBench (2025)" },
        segments: [
            { text: "Extensive evaluation on our " },
            { text: "Benchmark Results", refId: 2 },
            { text: " confirms that the proposed method achieves a 12% improvement over prior baselines, with particularly strong gains on long-horizon tasks." },
        ],
    },
    {
        footnote: { id: 3, note: "Zhang & Lee, 2024" },
        segments: [
            { text: "The end-to-end " },
            { text: "Training Pipeline", refId: 3 },
            { text: " enables rapid iteration cycles with minimal computational overhead, requiring only 8 GPU-hours for full convergence." },
        ],
    },
];

export default function FootnoteDiagram() {
    const [activeId, setActiveId] = useState<number | null>(null);

    useEffect(() => {
        let step = 0;
        const timer = setInterval(() => {
            step = (step + 1) % 4;
            setActiveId(step === 0 ? null : step);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="not-prose my-12">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 border-b border-zinc-200">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-zinc-300" />
                        <div className="w-3 h-3 rounded-full bg-zinc-300" />
                        <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    </div>
                    <div className="flex-1 mx-8">
                        <div className="bg-white rounded-md px-3 py-1 text-xs text-zinc-400 text-center border border-zinc-200">
                            research-site.edu/paper/example
                        </div>
                    </div>
                </div>

                {/* Page content */}
                <div className="p-6 sm:p-8">
                    {/* Column headers */}
                    <div className="flex gap-0">
                        <div className="flex-1 min-w-0 pr-4 sm:pr-6">
                            <div className="text-[10px] font-bold text-zinc-400 mb-4 tracking-widest uppercase">
                                Research Paper
                            </div>
                        </div>
                        <div className="hidden sm:block shrink-0 border-l border-zinc-200 pl-4" style={{ width: 140 }}>
                            <div className="text-[10px] font-bold text-zinc-400 mb-4 tracking-widest uppercase">
                                References
                            </div>
                        </div>
                    </div>

                    {/* Rows: each paragraph + its footnote share the same row */}
                    <div className="space-y-4">
                        {paragraphs.map((para, pi) => {
                            const paraRefId = para.segments.find((s) => s.refId)?.refId;
                            const isActive = paraRefId != null && paraRefId === activeId;
                            const fn = para.footnote;

                            return (
                                <div key={pi} className="flex gap-0 items-start">
                                    {/* Paragraph */}
                                    <motion.p
                                        className="flex-1 min-w-0 pr-4 sm:pr-6 text-[11px] sm:text-xs text-zinc-500 leading-[1.8]"
                                        animate={{
                                            backgroundColor: isActive
                                                ? "rgba(59, 130, 246, 0.06)"
                                                : "transparent",
                                        }}
                                        transition={{ duration: 0.3 }}
                                        style={{ borderRadius: 6, padding: "4px 24px 4px 6px", margin: 0 }}
                                    >
                                        {para.segments.map((seg, si) =>
                                            seg.refId ? (
                                                <span key={si}>
                                                    <span className="text-zinc-700 font-medium">
                                                        {seg.text}
                                                    </span>
                                                    <motion.span
                                                        className="inline-flex items-center justify-center w-[14px] h-[14px] rounded-full text-[8px] font-bold align-super ml-0.5 mr-0.5"
                                                        animate={{
                                                            backgroundColor: activeId === seg.refId ? "#3b82f6" : "#e4e4e7",
                                                            color: activeId === seg.refId ? "#fff" : "#71717a",
                                                            scale: activeId === seg.refId ? 1.3 : 1,
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        {seg.refId}
                                                    </motion.span>
                                                </span>
                                            ) : (
                                                <span key={si}>{seg.text}</span>
                                            )
                                        )}
                                    </motion.p>

                                    {/* Footnote slot (always rendered for layout, content only if footnote exists) */}
                                    <div
                                        className="hidden sm:flex items-start shrink-0 border-l border-zinc-200 pl-4 self-stretch"
                                        style={{ width: 140 }}
                                    >
                                        {fn && (
                                            <motion.div
                                                className="flex items-start gap-1.5 pt-1"
                                                animate={{
                                                    x: activeId === fn.id ? 3 : 0,
                                                    opacity: activeId === null || activeId === fn.id ? 1 : 0.25,
                                                }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                <motion.span
                                                    className="inline-flex items-center justify-center w-[14px] h-[14px] rounded-full text-[8px] font-bold shrink-0"
                                                    animate={{
                                                        backgroundColor: activeId === fn.id ? "#3b82f6" : "#e4e4e7",
                                                        color: activeId === fn.id ? "#fff" : "#71717a",
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {fn.id}
                                                </motion.span>
                                                <motion.span
                                                    className="text-[10px] leading-tight mt-px"
                                                    animate={{ color: activeId === fn.id ? "#3b82f6" : "#71717a" }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {fn.note}
                                                </motion.span>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Caption bar */}
                <div className="px-6 sm:px-8 py-3 bg-zinc-100 border-t border-zinc-200">
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            Active reference
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                            <div className="w-2 h-2 rounded-full bg-zinc-300" />
                            Idle footnote
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs text-zinc-400 mt-3">
                Footnotes auto-align to matching references — no manual positioning required.
            </p>
        </div>
    );
}
