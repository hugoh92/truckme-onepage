import { mount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';

import ContactFormComponent from '@/components/ContactFormComponent.vue';

describe('ContactFormComponent', () => {
    it('validates form submission', async () => {
        const wrapper = mount(ContactFormComponent);
        const nameInput = wrapper.find('input[name="name"]');
        const emailInput = wrapper.find('input[name="email"]');
        const messageInput = wrapper.find('textarea[name="message"]');
        const submitButton = wrapper.find('button[type="submit"]');

        // Simulate user input
        await nameInput.setValue('John Doe');
        await emailInput.setValue('john@example.com');
        await messageInput.setValue('Hello, this is a test message');

        // Submit the form
        await submitButton.trigger('click');

        // Check if success message is displayed
        expect(wrapper.find('.success-message').exists()).toBe(true);
    });
});
