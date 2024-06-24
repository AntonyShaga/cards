import { useEffect, useRef, useState } from 'react'

export const useOutsideClick = (initialValue: boolean) => {
  const [isActive, setIsActive] = useState(initialValue)
  const ref = useRef<HTMLDivElement | null>(null)

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return { isActive, ref, setIsActive }
}
