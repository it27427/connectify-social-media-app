'use client';

import React, { createContext } from 'react';
import { Session, User } from 'lucia';

interface SessionContext {
  user: User;
  session: Session;
}

const SessionContext = createContext<SessionContext | null>(null);

export default function SessionProvider({
  children,
  value,
}: React.PropsWithChildren) {}
