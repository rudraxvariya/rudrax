"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const dotX = useSpring(cursorX, { stiffness: 900, damping: 50 })
  const dotY = useSpring(cursorY, { stiffness: 900, damping: 50 })

  const ringX = useSpring(cursorX, { stiffness: 180, damping: 22 })
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 22 })

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onHoverStart = () => setHovering(true)
    const onHoverEnd = () => setHovering(false)

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)

    const interactables = document.querySelectorAll("a, button, [role='button'], input, textarea, select")
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onHoverStart)
      el.addEventListener("mouseleave", onHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverStart)
        el.removeEventListener("mouseleave", onHoverEnd)
      })
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: hovering ? "rgba(124,58,237,0.8)" : "rgba(124,58,237,0.4)",
        }}
        animate={{
          width: hovering ? 44 : clicking ? 20 : 32,
          height: hovering ? 44 : clicking ? 20 : 32,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-violet-500"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: clicking ? 6 : 6,
          height: clicking ? 6 : 6,
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.6 : hovering ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  )
}
