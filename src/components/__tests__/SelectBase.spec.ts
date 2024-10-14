/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SelectComponent from '../SelectBase.vue'
import { nextTick } from 'vue'

describe('SelectComponent.vue', () => {
  it('renders with given props', () => {
    const options = [
      { key: 'A', label: 'Option A' },
      { key: 'B', label: 'Option B' },
    ]

    const wrapper = mount(SelectComponent, {
      props: {
        id: 'test-select',
        label: 'Test Label',
        options,
        value: null,
        invalid: false,
      },
    })

    expect(wrapper.find('label').text()).toBe('Test Label')
    expect(wrapper.findAll('option')).toHaveLength(3)
  })

  it('renders invalid message when invalid prop is true', () => {
    const options = [{ key: 'A', label: 'Option A' }]

    const wrapper = mount(SelectComponent, {
      props: {
        id: 'test-select',
        label: 'Test Label',
        options,
        value: null,
        invalid: true,
      },
    })

    expect(wrapper.find('.invalid').exists()).toBe(true)
    expect(wrapper.find('small').text()).toBe('Please select a valid option')
  })

  it('applies invalid class to select element when invalid prop is true', async () => {
    const options = [{ key: 'A', label: 'Option A' }]

    const wrapper = mount(SelectComponent, {
      props: {
        id: 'test-select',
        label: 'Test Label',
        options,
        value: null,
        invalid: true,
      },
    })

    const selectElement = wrapper.find('select')
    expect(selectElement.classes()).toContain('invalid')
  })

  it('updates value when a new option is selected', async () => {
    const options = [
      { key: 'A', label: 'A' },
      { key: 'B', label: 'B' },
    ]

    const wrapper = mount(SelectComponent, {
      props: {
        id: 'test-select',
        label: 'Test Label',
        options,
        value: 'A', 
        invalid: false,
      },
    })

    const selectElement = wrapper.find('select')
    await selectElement.setValue('B')
    await nextTick()

    expect(wrapper.emitted()['update:value'][0]).toEqual(['B'])
    expect(selectElement.element.value).toBe('B')
  })
})
