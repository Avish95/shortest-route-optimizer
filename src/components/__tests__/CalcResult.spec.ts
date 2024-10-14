/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Result from '../CalcResult.vue'
import type ResultType from '@/types/result'
describe('Result.vue', () => {
  it('renders correctly with given result data', () => {
    const resultData: ResultType = {
      from: 'A',
      to: 'B',
      path: 'A,B,C',
      distance: 5,
    }

    const wrapper = mount(Result, {
      props: {
        result: resultData,
      },
    })

    expect(wrapper.find('h3').text()).toBe('Result')
    expect(wrapper.find('.result_panel p:nth-of-type(1)').text()).toBe(
      'From Node Name = "A", To Node Name = "B": A,B,C',
    )
    expect(wrapper.find('.result_panel p:nth-of-type(2)').text()).toBe(
      'Total Distance: 5',
    )
  })
})
