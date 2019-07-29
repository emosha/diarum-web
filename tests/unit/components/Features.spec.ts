import { shallowMount } from '@vue/test-utils';
import Features from '@/components/Features.vue';

describe('Features.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Features);
    expect(wrapper).toMatchSnapshot();
  });
});
