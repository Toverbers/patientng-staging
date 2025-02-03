import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Logo } from '@/icons/Logo';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

const AuthForm = ({
  title,
  subtitle,
  logo = true,
  fields = [],
  showSocial = false,
  showSwitch = false,
  switchLabel = "",
  submitText = "Continue",
  footerText = "",
  footerLink = "",
  footerLinkText = "",
  onSubmit,
  children,
  className = ""
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className={`w-full max-w-[600px] ${className}`}>
      <CardHeader className="space-y-3 text-center">
        <Link to="/">
        {logo && (
          <div className="flex justify-center">
            <Logo />
          </div>
        )}
        </Link>
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </CardHeader>

      <CardContent className="space-y-4">
        {showSocial && (
          <>
            <div className="flex flex-col md:grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                    fill="currentColor"
                  />
                </svg>
                Sign in with Apple
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>
          </>
        )}

        {showSwitch && (
          <div className="flex items-center space-x-2">
            <Switch id="advocate-mode"  />
            <Label htmlFor="advocate-mode">{switchLabel}</Label>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          {fields.map((field, index) => (
            <div key={index} className="space-y-2">
              <Label htmlFor={field.id}>{field.label}</Label>
              <div className="relative">
                <Input
                  id={field.id}
                  type={field.type === 'password' ? (showPassword ? 'text' : 'password') : field.type}
                  placeholder={field.placeholder}
                  {...field.props}
                />
                {field.type === 'password' && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="sr-only">
                      {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                  </Button>
                )}
              </div>
              {field.helpText && (
                <p className="text-sm text-gray-600">{field.helpText}</p>
              )}
            </div>
          ))}
        </form>
        {children}
      </CardContent>

      {(footerText || footerLink || submitText) && (
        <CardFooter className="justify-center flex gap-2 flex-col">
          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
            {submitText}
          </Button>
          <p className="text-sm text-gray-600">
            {footerText}{' '}
            {footerLink && (
              <Link to={footerLink} className="text-emerald-500 hover:text-emerald-600">
                {footerLinkText}
              </Link>
            )}
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthForm;