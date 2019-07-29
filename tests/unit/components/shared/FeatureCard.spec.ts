import { shallowMount } from '@vue/test-utils';
import FeatureCard from '@/components/shared/FeatureCard.vue';

describe('FeatureCard.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(FeatureCard, {
      propsData: {
        icon: 'smile',
        text: 'Text',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
