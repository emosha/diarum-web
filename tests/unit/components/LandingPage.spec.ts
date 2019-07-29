import { shallowMount } from '@vue/test-utils';
import LandingPage from '@/components/LandingPage.vue';

describe('LandingPage.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(LandingPage);
    expect(wrapper).toMatchSnapshot();
  });
});
