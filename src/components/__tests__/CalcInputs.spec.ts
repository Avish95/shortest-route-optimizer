/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CalculatorInputs from '../CalcInputs.vue'

describe('CalculatorInputs.vue', () => {
  it('renders correctly and has initial states', () => {
    const wrapper = mount(CalculatorInputs)
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.vm.userInput.fromnode).toBe('')
    expect(wrapper.vm.userInput.tonode).toBe('')
    expect(wrapper.vm.validationErrors.isFromInValid).toBe(false)
    expect(wrapper.vm.validationErrors.isToInvalid).toBe(false)
  })

  it('emits clear event when clear button is clicked', async () => {
    const wrapper = mount(CalculatorInputs)

    await wrapper.find('.clear_btn').trigger('click')

    expect(wrapper.emitted('clear')).toBeTruthy()

    expect(wrapper.vm.userInput.fromnode).toBe('')
    expect(wrapper.vm.userInput.tonode).toBe('')
    expect(wrapper.vm.validationErrors.isFromInValid).toBe(false)
    expect(wrapper.vm.validationErrors.isToInvalid).toBe(false)
  })

  it('validates input fields correctly', async () => {
    const wrapper = mount(CalculatorInputs)
    wrapper.vm.userInput.fromnode = 'A'
    wrapper.vm.userInput.tonode = 'A'
    wrapper.vm.handleCalculator()

    expect(wrapper.vm.validationErrors.isFromInValid).toBe(true)
    expect(wrapper.vm.validationErrors.isToInvalid).toBe(true)

    wrapper.vm.userInput.tonode = 'B'
    await wrapper.vm.handleCalculator()

    expect(wrapper.vm.validationErrors.isFromInValid).toBe(false)
    expect(wrapper.vm.validationErrors.isToInvalid).toBe(false)
  })

  it('emits action event with correct user input when inputs are valid', async () => {
    const wrapper = mount(CalculatorInputs)
    wrapper.vm.userInput.fromnode = 'A'
    wrapper.vm.userInput.tonode = 'B'

    await wrapper.vm.handleCalculator()

    expect(wrapper.emitted('action')).toBeTruthy()
    expect(wrapper.emitted('action')[0]).toEqual([
      { fromnode: 'A', tonode: 'B' },
    ])
  })
})
