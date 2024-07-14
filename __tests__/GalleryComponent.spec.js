import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import GalleryComponent from '@/components/GalleryComponent.vue';

describe('GalleryComponent.vue', () => {
  it('renders gallery correctly', () => {
    const wrapper = shallowMount(GalleryComponent);
    expect(wrapper.find('.gallery').exists()).toBe(true);
  });

  it('navigates to next image correctly', async () => {
    const wrapper = shallowMount(GalleryComponent);
    const initialImage = wrapper.vm.currentImage;
    await wrapper.find('.next').trigger('click');
    expect(wrapper.vm.currentImage).not.toBe(initialImage);
  });
});
