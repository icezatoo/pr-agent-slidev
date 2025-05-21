import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

// Helper function to read the slides.md file
const getSlidesContent = () => {
  const slidesPath = path.join(process.cwd(), 'slides.md')
  return fs.readFileSync(slidesPath, 'utf-8')
}

describe('slides.md content', () => {
  const slidesContent = getSlidesContent()

  it('should have the correct presentation title', () => {
    const titleMatch = slidesContent.match(/^title:\s*(.*)/m)
    expect(titleMatch).not.toBeNull()
    // @ts-ignore
    expect(titleMatch[1].trim()).toBe('PR-Agent')
  })

  it('should contain the main heading', () => {
    expect(slidesContent).toMatch(/#\s*AI Code Review, Smarter , Faster , Better/)
  })

  it('should contain specific list items related to PR issues', () => {
    expect(slidesContent).toMatch(/-\s*<b.*>Time<\/b>/)
    expect(slidesContent).toMatch(/-\s*<b.*>Suggestions<\/b>/)
    // Add more list items if needed, e.g.
    // expect(slidesContent).toMatch(/-\s*Quality/);
    // expect(slidesContent).toMatch(/-\s*Consistency/);
  })

  it('should contain the section "What is PR-Agent?"', () => {
    expect(slidesContent).toMatch(/#\s*What is PR-Agent\?/)
  })

  it('should contain the GitHub link', () => {
    expect(slidesContent).toMatch(/https:\/\/github\.com\/qodo-ai\/pr-agent/)
  })

  it('should contain the documentation link', () => {
    expect(slidesContent).toMatch(/https:\/\/qodo-merge-docs\.qodo\.ai\//)
  })
})
