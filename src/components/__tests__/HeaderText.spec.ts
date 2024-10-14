/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderText from '../HeaderText.vue'

describe('HeaderText', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderText)
    expect(wrapper.text()).toContain('Dijiktra’s Algorithm Calculator')
    expect(wrapper.text()).toContain(
      `Discovering Optimal Routes Through Nodes Using Dijkstra's Method`,
    )
  })
})
