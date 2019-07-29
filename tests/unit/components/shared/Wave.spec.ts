import { shallowMount } from '@vue/test-utils';
import Wave from '@/components/shared/Wave.vue';

describe('Wave.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Wave);
    expect(wrapper).toMatchSnapshot();
  });
});
