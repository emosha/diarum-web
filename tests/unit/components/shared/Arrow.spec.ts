import { shallowMount } from '@vue/test-utils';
import Arrow from '@/components/shared/Arrow.vue';

describe('Arrow.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Arrow, {
      propsData: {
        direction: 'up',
        href: '#features',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
