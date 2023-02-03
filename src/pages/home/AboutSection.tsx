import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function AboutSection() {
	useLayoutEffect(() => {
		gsap.fromTo(
			".about-section",
			{
				background:
					"linear-gradient(0deg, var(--clr-primary), var(--clr-primary-darker))",
			},
			{
				background:
					"linear-gradient(360deg, var(--clr-primary), var(--clr-primary-darker))",
				scrollTrigger: {
					trigger: ".about-section",
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<section className="about-section">
			<div className="container">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est
				possimus delectus nihil reprehenderit eveniet asperiores non. Dolore
				vero, quia harum quidem assumenda officiis facilis accusantium
				consectetur earum natus reprehenderit? Enim ducimus molestiae quam,
				optio amet deleniti maxime cumque vel nisi fugiat nesciunt hic incidunt,
				eius aperiam blanditiis quas neque numquam corrupti obcaecati. Ex
				corporis unde exercitationem accusantium voluptatem, ad, necessitatibus
				temporibus expedita non rerum, quasi nihil culpa. Vero ipsa corrupti
				magni id! Rem ab doloribus iste inventore modi recusandae alias
				perferendis autem fuga, magnam possimus reiciendis expedita temporibus
				necessitatibus sequi, explicabo consequatur tempora minus deleniti amet
				laboriosam neque quisquam sint? Officia perspiciatis porro neque ipsam,
				nihil possimus doloremque quaerat officiis minima eius. Voluptatibus
				dolores quam dolorum quas quaerat laudantium modi expedita. Excepturi
				animi voluptate deleniti error in harum laudantium. Laborum, veniam.
				Recusandae praesentium nulla doloribus placeat dolore! Corrupti ducimus
				ipsum pariatur quas autem hic iure assumenda, nisi blanditiis! A commodi
				dolor eum laudantium culpa, quidem doloribus reprehenderit doloremque
				quod, iste natus dicta, totam quaerat deleniti? Maxime, exercitationem
				consequuntur? Exercitationem maxime, assumenda consectetur sapiente
				sequi aperiam veritatis alias vitae rem fugiat, laboriosam earum? Sequi
				repellat autem voluptatum. Fugit quaerat beatae facere reprehenderit
				minima, ipsum totam id similique dolore odio quisquam doloremque illo
				omnis ab. Itaque commodi perspiciatis a asperiores vitae maxime qui
				blanditiis, aliquam consequatur nostrum et veniam fugiat dicta sed unde
				facilis cupiditate cumque! Aspernatur, quaerat consequuntur itaque eum
				tempora ipsam iure architecto ipsum, at doloribus vero enim nulla
				delectus quasi, temporibus molestiae saepe error corporis! Temporibus
				inventore suscipit excepturi maxime perferendis doloribus. Dignissimos
				adipisci reiciendis repellat consequuntur hic molestias incidunt debitis
				ratione aspernatur necessitatibus perferendis optio rem sed amet,
				maxime, magni excepturi numquam minus provident recusandae officiis
				labore odio magnam culpa! Assumenda saepe cupiditate, veniam nemo hic
				perferendis numquam ducimus voluptatum sequi itaque culpa atque delectus
				quo aperiam repellendus tempora aspernatur rerum ea totam officiis
				adipisci sapiente ex! Quis adipisci optio aperiam, et non porro facilis
				minima hic recusandae ratione? Molestiae aut, iusto eaque ipsam
				blanditiis distinctio, nesciunt quas aliquid ea, sit nam expedita
				adipisci nisi id fugiat necessitatibus corporis quasi? Fugiat, numquam!
				Ut pariatur molestias vitae quae? Exercitationem nesciunt porro commodi
				sit magni alias nostrum aspernatur reprehenderit distinctio est,
				sapiente ab impedit! Nisi, nam saepe! Reprehenderit id commodi at
				eligendi hic laudantium debitis eius repellat, molestiae impedit velit
				ipsa perspiciatis quidem sed sit alias corrupti fugiat doloremque est
				porro soluta saepe explicabo! Dolorum nemo quidem fugiat rerum rem
				aperiam nihil laboriosam! Itaque nostrum eum nobis sunt amet sequi.
				Soluta asperiores totam, unde optio accusantium eveniet saepe enim animi
				nostrum temporibus, tempora quas cum repudiandae itaque dolores maxime
				magni qui, veritatis similique. Id explicabo dignissimos odit est
				possimus et corporis, quo dicta, provident laboriosam vitae quae
				suscipit expedita ex ad adipisci, repellat dolores doloribus quibusdam
				necessitatibus nesciunt fugiat debitis nisi. Modi quaerat facilis sed
				unde nostrum temporibus minima impedit cumque! Inventore perferendis
				vitae nemo reprehenderit sunt velit voluptates aspernatur doloribus ipsa
				aliquid aperiam, tempora distinctio adipisci natus sit placeat dolorem
				tempore pariatur? Porro distinctio tempora placeat iste quam, vero
				minima quae perferendis tempore magni debitis esse animi sapiente
				laborum veniam quia. Error quibusdam, assumenda nobis quod commodi
				suscipit debitis, a ullam culpa voluptatem ipsam sunt laborum impedit
				perferendis, dignissimos iusto libero nisi ex officia voluptatum
				voluptate in eligendi eaque sed? Porro quae cum eum consectetur amet
				quis assumenda nobis. Aut dolores nemo in asperiores. Minus dolorum ab
				assumenda quod, totam in deserunt at facilis natus ipsam animi
				repellendus voluptas numquam ipsa! Explicabo laborum esse distinctio?
				Odio natus consequatur tempora, exercitationem reiciendis incidunt vel
				iusto, eius sed nesciunt illum alias non accusamus dolore ducimus
				distinctio ullam fugit sint expedita maxime? Eum nemo eligendi ea!
				Voluptatibus eius, natus delectus autem repellat sapiente a iure
				blanditiis est nobis veniam aliquid ab quasi illum facere officia quidem
				ea iste, deleniti saepe! Numquam alias maiores autem recusandae minima
				earum culpa perspiciatis aut labore reprehenderit a ipsam debitis illum
				natus ducimus sunt, dolorum odit quod voluptas? Minus doloribus est
				numquam delectus voluptate, soluta animi in libero laborum itaque illum
				odit rem eum ab exercitationem. Officiis tempore modi, eaque veniam enim
				consectetur alias eum numquam magni maiores explicabo soluta nulla non
				ipsam illum nihil architecto exercitationem culpa? Modi sint totam,
				adipisci vel fuga impedit esse error cupiditate ea omnis, natus aliquam
				alias deleniti ducimus eaque porro quam autem. Recusandae quos sequi
				doloremque voluptas culpa eveniet ipsa iste ducimus error voluptate quia
				saepe accusamus at necessitatibus explicabo est minima, quas laudantium
				officiis, nesciunt quisquam, modi placeat sit. Dolorem aperiam
				excepturi, dolor illum porro ad maxime hic magnam ex blanditiis esse
				dolorum, dignissimos repudiandae voluptate, ullam nisi. Exercitationem
				facere quia voluptate error tempore porro iure similique! Mollitia
				beatae harum, alias dolorem cum fugiat, labore ea sit nesciunt molestiae
				deserunt, unde saepe! Reiciendis excepturi eligendi, natus enim quos
				minus, eaque, cum officiis voluptate atque repellendus perferendis.
				Dignissimos perspiciatis veritatis placeat deserunt! Enim soluta aut
				sapiente, adipisci minima accusamus qui ducimus suscipit, dolorem fugit
				itaque temporibus earum laboriosam maxime tempora voluptate sit
				voluptas. Veritatis cupiditate atque aspernatur voluptas porro
				repellendus tenetur, sapiente quas laborum ipsa pariatur laboriosam
				cumque expedita et ut aliquid, accusantium ipsam necessitatibus, fugiat
				distinctio at placeat? Saepe accusantium aliquam deleniti a iusto
				veritatis quam odio dolorem. Commodi, facere temporibus aliquam quos
				recusandae, reiciendis sunt asperiores accusantium culpa molestias
				exercitationem perspiciatis voluptatibus eligendi quod. Voluptatem
				officia perspiciatis eos deleniti at odio facere quis. Quidem,
				cupiditate iusto. Sint facere dolor totam libero maxime odit voluptates
				id doloribus aperiam. Necessitatibus magni minima similique incidunt sit
				est natus eius delectus accusamus illum dolorum, accusantium alias quos
				earum quod amet nemo odio dolores aliquam numquam? Consectetur, non
				quidem esse consequatur fugiat quisquam, corporis suscipit ipsum nisi
				nihil ratione, aliquam vel perferendis voluptatibus sequi. Quasi ut
				eaque omnis deserunt fugiat excepturi velit vitae, laborum minima vel
				animi atque magnam dolore ducimus architecto labore placeat
				exercitationem inventore iste debitis dolorum! Architecto voluptatibus
				aperiam recusandae nostrum? Unde odio iusto sed sint exercitationem
				cupiditate impedit ea harum, at eligendi inventore! Quaerat optio porro
				ex expedita laboriosam culpa hic! Omnis voluptas iusto dolor asperiores
				quisquam iure.
			</div>
		</section>
	);
}
