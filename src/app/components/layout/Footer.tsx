import ThemeToggle from '@/core/components/theme-toggle'
import { APP_TITLE } from '@/core/lib/constants'

export default function Footer () {
  return (
    <footer className='flex items-center justify-between pt-5'>
      <div className="flex flex-col">
        <p className='text-xs'>
          &copy; {new Date().getFullYear()} {APP_TITLE}
        </p>

        <p className='text-xs'>
          Proyecto del curso EFSRT II
        </p>
      </div>

      <ThemeToggle />
    </footer>
  )
}
