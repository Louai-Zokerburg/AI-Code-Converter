import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { registerFetcher } from '../fetcher/register';
import { loginFetcher } from '../fetcher/login';
import { getConversionsFetcher } from '../fetcher/get-conversions';
import { getCurrentConversionFetcher } from '../fetcher/get-current-conversion';
import { createNewConversionFetcher } from '../fetcher/create-new-conversion';
import { deleteConversionFetcher } from '../fetcher/delete-conversion';
import { convertFetcher } from '../fetcher/convert';

export const useStore = create(
  persist(
    (set, get) => ({
      auth: {
        user: null,
        loading: false,
        error: null,
      },

      currentConversion: {
        conversion: null,
        loading: false,
        error: null,
      },

      theme: 'dark',
      isSidebarOpen: false,

      conversions: {
        data: null,
        loading: false,
        error: null,
      },

      toggleSidebar: () => set({ isSidebarOpen: !get().isSidebarOpen }),

      toggleTheme: () => {
        const currentTheme = get().theme;

        set({ theme: currentTheme === 'dark' ? 'light' : 'dark' });
      },

      createNewConversion: async () => {
        set({
          currentConversion: { conversion: null, loading: true, error: null },
        });

        const response = await createNewConversionFetcher(
          get().auth.user.token
        );

        if (response.conversion) {
          set({
            currentConversion: {
              conversion: response.conversion,
              loading: false,
              error: null,
            },
          });

          set({
            conversions: {
              data: [response.conversion, ...get().conversions.data],
              loading: false,
              error: false,
            },
          });
        } else {
          set({
            currentConversion: {
              conversion: null,
              loading: false,
              error: response.error,
            },
          });
        }
      },

      setCurrentConversion: (id) => {
        set({
          currentConversion: {
            conversion: get().conversions.data.find((c) => c._id === id),
            loading: false,
            error: null,
          },
        });
      },

      deleteConversion: async (id) => {
        if (get().conversions.data.length <= 1) return;

        const response = await deleteConversionFetcher(
          get().auth.user.token,
          id
        );

        if (response.success) {
          if (id === get().currentConversion.conversion._id) {
            const newCurrentConversionIndex =
              get().conversions.data.findIndex((c) => c._id === id) - 1;

            set({
              currentConversion: {
                conversion: get().conversions.data[newCurrentConversionIndex],
                loading: false,
                error: null,
              },
            });
          }

          set({
            conversions: {
              data: get().conversions.data.filter((c) => c._id !== id),
              loading: false,
              error: null,
            },
          });
        } else {
        }
      },

      setSourceLang: (language) => {
        set({
          currentConversion: {
            ...get().currentConversion,
            conversion: {
              ...get().currentConversion.conversion,
              sourceLang: language,
            },
          },
        });
      },
      setTargetLang: (language) => {
        set({
          currentConversion: {
            ...get().currentConversion,
            conversion: {
              ...get().currentConversion.conversion,
              targetLang: language,
            },
          },
        });
      },

      setSourceCode: (code) => {
        console.log(code);
        set({
          currentConversion: {
            ...get().currentConversion,
            conversion: {
              ...get().currentConversion.conversion,
              sourceCode: code,
            },
          },
        });
      },
      setTargetCode: (code) => {
        console.log(code);
        set({
          currentConversion: {
            ...get().currentConversion,
            conversion: {
              ...get().currentConversion.conversion,
              targetCode: code,
            },
          },
        });
      },

      convert: async () => {
        set({
          currentConversion: {
            conversion: get().currentConversion.conversion,
            loading: true,
            error: null,
          },
        });

        const response = await convertFetcher(
          get().auth.user.token,
          get().currentConversion.conversion
        );

        if (response.conversion) {
          set({
            currentConversion: {
              conversion: response.conversion,
              loading: false,
              error: null,
            },
          });
          get().getConversions();
        } else {
          set({
            currentConversion: {
              conversion: get().currentConversion.conversion,
              loading: false,
              error: response.error,
            },
          });
        }
      },

      getConversions: async () => {
        set({
          conversions: {
            data: get().conversions.data,
            loading: true,
            error: null,
          },
        });

        const response = await getConversionsFetcher(get().auth.user.token);

        if (response.conversions) {
          set({
            conversions: {
              data: response.conversions,
              loading: false,
              error: null,
            },
          });
        } else {
          set({
            conversions: { data: null, loading: false, error: response.error },
          });
        }
      },

      getCurrentConversion: async () => {
        set({
          currentConversion: {
            conversion: get().currentConversion.conversion,
            loading: true,
            error: null,
          },
        });

        const response = await getCurrentConversionFetcher(
          get().auth.user.token
        );

        if (response.conversion) {
          set({
            currentConversion: {
              conversion: response.conversion,
              loading: false,
              error: null,
            },
          });
        } else {
          set({
            currentConversion: {
              conversion: null,
              loading: false,
              error: response.error,
            },
          });
        }
      },

      /******************************* */

      /** Auth Actions */
      logoutUser: () => {
        set({ auth: { user: null, loading: false, error: null } });
        set({
          currentConversion: { conversion: null, loading: false, error: null },
        });
      },

      registerUser: async (user) => {
        set({ auth: { user: null, loading: true, error: null } });

        const response = await registerFetcher(user);

        if (response.user) {
          set({ auth: { user: response.user, loading: false, error: null } });
        } else {
          set({ auth: { user: null, loading: false, error: response.error } });
        }
      },

      loginUser: async (user) => {
        set({ auth: { user: null, loading: true, error: null } });

        const response = await loginFetcher(user);

        if (response.user) {
          set({ auth: { user: response.user, loading: false, error: null } });
        } else {
          set({ auth: { user: null, loading: false, error: response.error } });
        }
      },
      /** Auth Actions */
    }),
    { name: 'app-store' }
  )
);
