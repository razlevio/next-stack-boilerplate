import "@/styles/globals.css"

import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "sonner"

import { appConfig } from "@/config/app"
import { geist, geistMono } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ModalProvider } from "@/components/providers/modal-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"

export const metadata: Metadata = {
	title: {
		default: appConfig.name,
		template: "%s | " + appConfig.name,
	},
	applicationName: appConfig.name,
	description: appConfig.description,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	authors: [
		{
			name: "razlevio",
			url: "https://github.com/razlevio",
		},
	],
	creator: "razlevio",
	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon.png",
	},
	verification: {
		google: "google",
		yandex: "yandex",
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html
				lang="en"
				className={cn("h-full", geist.className, geist.variable, geistMono.variable)}
				suppressHydrationWarning
			>
				<body>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Toaster position="bottom-center" />
						<ModalProvider />
						{children}
						<Analytics />
						<SpeedInsights />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
