import { useEffect, useState } from 'react'

interface UseCounterAnimationOptions {
  start?: number
  end: number
  duration?: number
  isVisible: boolean
}

export function useCounterAnimation({
  start = 0,
  end,
  duration = 2000,
  isVisible,
}: UseCounterAnimationOptions) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(start + (end - start) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [start, end, duration, isVisible])

  return count
}
