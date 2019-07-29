import { shallowMount } from '@vue/test-utils';
import Hero from '@/components/Hero.vue';

describe('Hero.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Hero);
    expect(wrapper).toMatchSnapshot();
  });
});
