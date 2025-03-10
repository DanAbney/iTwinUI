/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { AvatarGroup, Avatar } from '@itwin/itwinui-react';

export default () => {
  return (
    <AvatarGroup animated iconSize='medium'>
      <Avatar abbreviation='TR' backgroundColor='#6AB9EC' title='Terry Rivers' />
      <Avatar abbreviation='RM' backgroundColor='#C8C2B4' title='Robin Mercer' />
      <Avatar abbreviation='MV' backgroundColor='#73C7C1' title='Morgan Vera' />
      <Avatar abbreviation='JM' backgroundColor='#A3779F' title='Jean Mullins' />
      <Avatar abbreviation='AM' backgroundColor='#73C7C1' title='Ashley Miles' />
    </AvatarGroup>
  );
};
