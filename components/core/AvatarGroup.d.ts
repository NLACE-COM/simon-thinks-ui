import * as React from 'react';

export interface AvatarGroupMember {
  name: string;
  src?: string;
}

/**
 * Overlapping stack of avatars with a `+N` overflow chip. Members beyond `max`
 * collapse into the chip.
 */
export interface AvatarGroupProps {
  avatars: AvatarGroupMember[];
  /** Max avatars shown before the +N chip. @default 4 */
  max?: number;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AvatarGroup(props: AvatarGroupProps): React.ReactElement;
