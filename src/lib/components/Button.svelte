<script lang="ts">
  import { twJoin } from 'tailwind-merge';
  const ButtonVariant = ['error', 'warn', 'success', 'default'] as const;
  const ButtonSize = ['small', 'medium', 'large'] as const;
  interface ButtonType {
    variant: (typeof ButtonVariant)[number];
    size: (typeof ButtonSize)[number];
    text: string;
    click: HTMLButtonElement['onclick'];
  }
  // Svelte 5 Rune format
  // const { variant = 'default', size = 'medium', text = 'Button', click }: Partial<ButtonType> = $props();
  export let { variant = 'default', size = 'medium', text = 'Button', click }: Partial<ButtonType> = {};
  const btnSize: Record<ButtonType['size'], string> = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-5 py-2.5 text-sm',
    large: 'px-5 py-3 text-base'
  };
  const btnVariant: Record<ButtonType['variant'], string> = {
    error: 'text-black bg-kusogaki-red',
    warn: 'text-black bg-kusogaki-yellow',
    success: 'text-black bg-kusogaki-green',
    default: 'text-white bg-kusogaki-indigo'
  };
</script>

<button class="justify-center self-center rounded-lg text-center uppercase {twJoin(btnSize[size], btnVariant[variant])}" onclick={click}>
  {text}
</button>
