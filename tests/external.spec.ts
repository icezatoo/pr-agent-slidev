import { describe, it, expect, vi } from 'vitest'
import { emptyArray, sayHello } from '../snippets/external'

describe('emptyArray', () => {
  it('should return an array', () => {
    expect(Array.isArray(emptyArray(5))).toBe(true)
  })

  it('should return an array with the correct length', () => {
    expect(emptyArray(3)).toHaveLength(3)
    expect(emptyArray(0)).toHaveLength(0)
    expect(emptyArray(10)).toHaveLength(10)
  })

  it('should return an array with undefined elements', () => {
    const arr = emptyArray(4)
    arr.forEach(element => {
      expect(element).toBeUndefined()
    })
  })
})

describe('sayHello', () => {
  it('should log "Hello from snippets/external.ts" to the console', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    sayHello()
    expect(consoleSpy).toHaveBeenCalledWith('Hello from snippets/external.ts')
    consoleSpy.mockRestore()
  })
})
