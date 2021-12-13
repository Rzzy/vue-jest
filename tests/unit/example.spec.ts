import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });
  it('add fun', () => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.count).toBe(1);
  });
  it('del fun', () => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.vm.del();
    expect(wrapper.vm.count).toBe(-1);
  });
});
