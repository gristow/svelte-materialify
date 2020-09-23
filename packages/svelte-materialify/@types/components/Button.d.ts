import { SvelteComponent } from 'svelte';

declare class Button extends SvelteComponent {
  $$prop_def: {
    class?: string;
    fab?: boolean;
    icon?: boolean;
    block?: boolean;
    size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
    tile?: boolean;
    text?: boolean;
    depressed?: boolean;
    outlined?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    active?: boolean;
    activeClass?: string;
    type?: 'button' | 'reset' | 'submit';
    ripple?: any;
    style?: string;
  } & Record<string, any>;
}

export default Button;
