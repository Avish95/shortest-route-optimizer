/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import HeaderText from '@/components/HeaderText.vue'
import CalculatorWrapper from '@/components/CalculatorWrapper.vue'

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders HeaderText component', () => {
    const wrapper = mount(App)
    const headerText = wrapper.findComponent(HeaderText)
    expect(headerText.exists()).toBe(true)
  })

  it('renders CalculatorWrapper component', () => {
    const wrapper = mount(App)
    const calculatorWrapper = wrapper.findComponent(CalculatorWrapper)
    expect(calculatorWrapper.exists()).toBe(true)
  })

  it('matches the snapshot', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toMatchSnapshot()
  })

 
})
