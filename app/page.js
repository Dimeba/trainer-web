// components
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Options from '@/components/Options'
import About from '@/components/About'
import Transformation from '@/components/Transformation'
import Questions from '@/components/Questions'
import Contact from '@/components/Contact'
import SocialIcons from '@/components/SocialIcons'


export default function Home() {
	return (
		<main>
			<Hero />
			<Introduction />
			<Options />
		    <About />
			<Transformation />
			<Questions />
			<Contact />
			<SocialIcons />	
		</main>
		
	)
}
