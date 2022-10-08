import { mount } from '@vue/test-utils'
import SobreVue from '@/views/Sobre.vue'


describe('Sobre.vue', () => {
  it('Carrega a página e renderiza o seu nome', () => {
    const wrapper = mount(SobreVue)
    expect(wrapper.text()).toMatch("Sobre o App")
  })
})