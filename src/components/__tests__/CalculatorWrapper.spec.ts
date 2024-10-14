// SelectComponent.spec.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import CalculatorWrapper from '../CalculatorWrapper.vue'
import { nextTick } from 'vue'
import CalculatorInputs from '../CalcInputs.vue'
import CalcResult from '../CalcResult.vue'

// Mocking the ShortestPath service for testing
vi.mock('@/services/calculator', () => ({
  ShortestPath: vi
    .fn()
    .mockResolvedValue({ from: 'A', to: 'B', path: 'A,B,C', distance: 5 }),
}))

describe('CalculatorWrapper.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(CalculatorWrapper)
    expect(wrapper.exists()).toBe(true)
  })

  it('shows loading spinner when action is triggered', async () => {
    const wrapper = mount(CalculatorWrapper)

    // Check initial state
    expect(wrapper.find('.loadingWraper').exists()).toBe(false)

    // Simulate action that triggers loading
    await wrapper.vm.handleAction()

    // Check if loading spinner is visible
    expect(wrapper.find('.loadingWraper').exists()).toBe(true)
    expect(wrapper.find('.loadingText').text()).toBe(
      'Calculating the Shortest Path...',
    )
  })

  it('renders CalculatorInputs component', () => {
    const wrapper = mount(CalculatorWrapper)
    const calculatorInputs = wrapper.findComponent(CalculatorInputs)
    expect(calculatorInputs.exists()).toBe(true) // Check if CalculatorInputs is rendered
  })

  it('renders CalcResult component when result is not null', async () => {
    const wrapper = mount(CalculatorWrapper)

    // Simulate setting the result
    wrapper.vm.result = {
      from: 'A',
      to: 'B',
      path: 'A,B,C',
      distance: 5,
    }

    // Call nextTick to ensure the DOM updates
    await nextTick()

    const calcResult = wrapper.findComponent(CalcResult)
    expect(calcResult.exists()).toBe(true) // Check if CalcResult is rendered

    // Check if the correct result is passed to the CalcResult component
    expect(calcResult.props('result')).toEqual(wrapper.vm.result)
  })

  it('shows image wrapper when result is null', async () => {
    const wrapper = mount(CalculatorWrapper)

    wrapper.vm.result = null
    await nextTick()

    const imageWrapper = wrapper.find('.image_wrapper')
    expect(imageWrapper.exists()).toBe(true) 
  })
})
