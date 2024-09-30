import {axiosClassic} from "~/shared/api/interceptors";
import {saveTokenStorage} from "~/shared/services/auth-token";
import {useUserStore} from "~/stores/user";

export const AuthService = {
  async signUp(data) {
    const req = await axiosClassic.post(
      'users',
      {...data, avatar: "https://picsum.photos/800"}
    )

    if (req.data) {
      await this.signIn({email: data.email, password: data.password})
      useUserStore().setUser({email: req.data.email, name: req.data.name, avatar: req.data.avatar})
    }
  },

  async signIn(data) {
    const req = await axiosClassic.post('auth/login', data)

    if (req.data) {
      saveTokenStorage(req.data.access_token)
      navigateTo('/')
      if (!useUserStore().status) {
        await useUserStore().getUser(req.data.access_token)
        navigateTo('/')
      }
    }
  }
}
