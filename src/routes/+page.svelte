<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import '$css/themes.css';
	import '$css/css.css';
	import { themes } from '$lib/themes';
	const fonts = ['Argon', 'Neon', 'Xenon'];
	const randoTheme = themes[Math.floor(Math.random() * themes.length)];
	const randoFont = fonts[Math.floor(Math.random() * fonts.length)];
	onMount(async () => {
		await import('$lib/theme-selector');
	});
</script>

<div class="bg"></div>
<main style="--rando-font: {randoFont}">
	<article>
		<section class="title-section">
			<div class="title-text">
				<h1 class="title">The Plan</h1>
				<h3 class="attr">by Nick White</h3>
			</div>
		</section>
		<section class="body-text">
			<div class="intro">
				<p>
					The amount of time it's taken for me to actually write this out has probably raised
					expectations beyond what's appropriate for such a meager "plan" -- though we might've
					crossed the threshold where you just think I never had any plan at all and was just going
					to pretend I didn't hear you when you said "can you post it pls".
				</p>
				<p>
					But yeah -- it's not like a full-fledged plan, with detailed steps etc -- it's guidance
					with which we could make a plan, with a specific-ish goal as a kind of north star.
				</p>
				<p>
					Let me start with point 0, which is that there are loads of things that I've heard from
					yall and others that we should be doing (quotas for development, some kind of
					holding-feet-to-the-fire strategy for an upper management tier that seems to enjoy not
					doing very much work, etc). My plan does not pretend to be better or supercede allayall's
					smartypants stuff. It's just a specific area that I know a little bit and I see what seems
					to be a huge window of opportunity. All we need is to defenestrate ourselves.
				</p>
			</div>
			<div class="exec">
				<img src="" alt="" />
				<h2>And now for The Executive Summary of THE PLAN</h2>
				<p>
					The tech world shares several important similarities with us, GLAMs in general, and
					libraries specifically.
				</p>
				<p>
					The tech world runs on open source development -- and while it could be lumped in with
					"knowedge sharing" and you could tell me "yeah well so does academia" and that's true --
					except the tech world -- *including the huge monstrosities of capitalism like Facebook,
					Google, etc* -- actually *appreciate* this. Big tech companies, and individuals on the
					wealthier side (of which there are many), give money to people and groups who are doing
					good things. Most big companies (Facebook and Google included) will literally just hire
					open source developers who maintain important/interesting projects, just to have them
					continue doing what they were doing already for free.
				</p>
				<p>
					(Partly it's because they see profit in this -- if an important dependency is struggling,
					and their business will fail without it, hiring the person to get them to do it is cheaper
					than reinventing the wheel.)
				</p>
				<p>
					The other important (and relevant) difference between the tech and academic worlds is
					that, in academics, you write grants; ie, you say "this is what I want to do, please give
					me money so I can do it" and Mr Moneybags says "ok that looks cool, here's some money,
					make sure you show us how it worked out when you're done."
				</p>
				<p>
					But in tech, it's the reverse: you have to do the cool thing *first.* They don't give
					money to people with ideas, they give money to existing work. If we want to get in on tech
					money, we have to impress the world first, *then* leverage that into donations.
				</p>
				<p>
					So that's the problem THE PLAN hopes to solve: how to get interesting enough to tech
					people that they start throwing money at us.
				</p>
			</div>
			<div class="enuf">
				<img src="" alt="" />
				<h2>*OK ENOUGH ALREADY, CAN WE GET TO THE ACTUAL PLAN PLEASE*</h2>
				<p>Yes, ffs, no need to yell. Let's outline The Plan.</p>
				<p>
					After ONE MORE bit of context. I think, in the past, I've presented the plan with too many
					"options" and it sounded too open-ended, so I'll present this as a bit more opinionated,
					but please read it all as though most aspects of it are flexible.
				</p>
			</div>
			<div class="plan">
				<img src="" alt="" />
				<h2>_THE PLAN_</h2>
				<p>
					In my head, I see it having 2 "arms" -- maximizing current content, and expanding our
					reach. (One arm gathers, the other arm reaches.)
				</p>
				<h3>1. Gathering.</h3>
				<p>
					We have lots of digital content already and that's lovely but we also have lots of content
					that I don't know if we think of as digital: courses, colloquia, lectures, etc -- a lot
					of/all of that stuff is filmed, but, as far as I know, we just dump it onto youtube as an
					afterthought. But that should be the *start* of our use of the content, not the graveyard.
					Similar institutions will slice up content and release clips on tiktok, instagram; *one*
					lecture could give us a month of daily tiktok posts -- with all our back content, if we
					let youtube show ads (which we should not do), if we actually put effort into it, we could
					all be making grown up salaries just on views alone.
				</p>
				<p>
					(To say that more clearly: we should not monetize videos. We would get more money by NOT
					showing ads and then holding out our hands and saying "look, we don't even monetize our
					videos, that's how dedicated we are" . Please note that this sentiment is not based on
					facts, it's based on vibes. Strong vibes, but still vibes. Should probably be confirmed
					with facts if actually implemented.)
				</p>
				<p>
					The video thing -- that's just one example. We have written content, and extensive
					expertise we could share.
				</p>
				<p>
					We also need more people to understand what a library is. It's *not* a collection of
					objects. That's like handing patrons a pile. No one wants a pile.
				</p>
				<p>
					I can phrase it in terms of the traditional reference interview we all learned about in
					school: person with an information need comes up to the desk and states their information
					need. We respond with the information.
				</p>
				<p>
					But that's not what we do. When it comes to the patrons, we're not a pile, we're a filter
					for the pile. We don't "respond with the information" -- we use our expertise with the
					collections to help navigate the patron through the pile to the spot from which we think
					they will have the clearest view of our collection in the context of their need.
				</p>
				<p>
					We're guides through the wilderness. That understanding of our work is even more important
					at the Newberry since 1) we don't lend, 2) we're not a "local resource" for anyone, since
					the only people we're "local" to are wealthy people who don't need us, and 3) we produce
					and support huge amounts of academic content in a very remote way. Our "pile" is more like
					our pockets than our gallery.
				</p>
				<img src="" alt="" />
				<h3>2. Reaching.</h3>
				<p>
					The thing about the Newberry that annoys me so much is how amazing you people all are, and
					we're basically doing nothing with what can only be described as a rare and significant
					collection of extremely talented and interesting people. The Newberry could be a leader,
					but instead we put our considerable talents towards pushing us along in a flimsy raft in
					an empty riverbed. The boat keeps moving only based on the strength of how good you all
					are at your jobs, and that's embarrassing. It's like getting Paul Erdos to do your taxes.
					I'm sure he'd do a great job.
				</p>
				<p>I don't know how that's relevant, but I'm the writer here, so you're stuck with it.</p>
				<p>
					The Newberry could be a leader in the GLAM tech space. Our small size and our relative
					youth (employees, not the institution) makes us uniquely nimble; we could position
					ourselves on the cutting edge -- I mean, we already are on the cutting edge, because
					that's how I roll, but no one knows it, because I spend half my time doing cutting edge
					stuff and the other half trying to figure out how to get things done with not enough time
					or people.
				</p>
				<p>In order to promote our tech we could:</p>
				<p></p>
				<ul>
					<li>
						- promote via essays/articles/blogs. I have plenty to say (did I have to say that 5
						pages in to a 2 point plan?) and I would love to express the details of how we do the
						things we do -- and I'm sure all of you would too. I could write 5 pages just on the
						header I made last week for the new Transcribe site.
					</li>
					<li>
						- provide code to the community. Technically we already do this, since everything we do
						is open source. But we don't put any effort into it -- our code is bare minimum
						functional; we should be putting in the extra time to make it extensible, so other
						people can use it -- and then promote those projects to get people engaged with our
						code.
					</li>
					<li>
						- provide support to the community. Not like tech support, f that, kill me. I mean,
						like, we have a lot of people around the Newberry who like the StoryMaps project that
						Northwestern maintains. We should find a feature that we think it needs, and write that
						feature and contribute it. Contributing to other people's projects is the code version
						of making conversation by asking a person questions about things they're interested in,
						rather than telling them about your own interests. You come out with a lot more friends
						that way.
					</li>
					<li>
						- branding. The Newberry has "branding" but we don't have a *brand* -- at least, not
						online. Our online brand is just an emaciated version of our physical brand: a PWI with
						nifty lectures and dusty tomes of arcane lore.
					</li>
				</ul>
				<p>
					(Apparently no one knows the PWI acronym. It means `Predominantly White Institution.` To
					be fair tho, we have become drastically less white than we used to be even just in the
					time I've been here -- and we've always been lousy with gays and gender-nonconformists. (I
					think that's why that guy Mike is so mad all the time, he's embarrassed to tell everyone
					where he works when he goes to Trump rallies because we're all so gay.) The employees are
					getting more diverse, and our spotlights on our collections are too, but the collections
					themselves, and the brand, and the institution as a whole, are still PWI, and probably
					will be, until all that dead white people money is spent.)
				</p>
				<p>
					Personally, I think the Newberry's online brand should be reflective of who we are -- the
					workers, not the c-level, not the board of directors. The Newberry's best and brightest
					are scrappy, crafty, unique, creative, inspired, passionate, playful, and vibrant. That's
					who we should be online.
				</p>
			</div>
			<div class="so-what">
				<img src="" alt="" />

				<h2>
					*SO WHAT DOES THIS ACTUALLY MEAN? DO YOU EVEN HAVE ONE SINGLE FACTUAL THING WE CAN
					ACTUALLY DO?*
				</h2>
				<p>
					You could've just said "what are the next steps" instead of yelling at me. And yeah, I
					know I'm the one who wrote this. If I'm not allowed to have fun working for the Newberry,
					then what the fuck am I actually doing here.
				</p>
				<p>
					Ideally, the next step would be to reallocate/hire a digital strategist and start talking
					about where we want to start. (For example, essays/articles and extensible code are things
					we could focus on today, while contributing to other institutions' code is probably a
					"phase two" thing, since we'd probably need more developers to do that.)
				</p>
				<p>
					I'd also attempt to get some (or all!) of you up to the 5th floor for a bunch of your time
					and teach you to write python and javascript. I don't care if you like your current job
					and you hate to code. I like coding, so therefore, everyone else should too. Kidding aside
					-- we need more coders, I've taught loads of people to code (ok well like 3 but how many
					have you done), so if there actually were people who were interested in doing that, the
					Newberry should be professionally developing that. If nothing else, it'll increase your
					salary when you finally give up on the Newberry.
				</p>
				<p>
					So that's it. That's The Plan. I think it would work, but it takes buy in from a lot of
					people who are perfectly comfortable with the current situation. The extent to which it
					would be successful is proportional to the extent to which we shift our paradigm to a
					"digital first" stance -- we've been dipping our toes in the digital world for 3 decades
					and the ROI has been proportional to the effort: basically 0. It's a hard sell to say,
					"Hey, you know that thing we've been doing a little of that's not helped us at all? Let's
					do MORE of that."
				</p>
				<p>
					(I also acknowledge that this plan could be reduced (reductively!) to "my dept is cool,
					lets put more energy into it" and probably all of us feel that way about our departments.
					The difference is, I'm actually correct about it and you guys are all just wrong. I'm just
					kidding -- I do get it, everyone wants more support, more effort, etc. But I think we can
					agree that the effort we're putting into social media and digital strategy does not
					adequately meet the market that's available there. And -- let's be honest -- there's a
					bigger market online than in the various ivory towers.)
				</p>
				<p>
					Maybe I'm wrong, but it seems like we've plateaued the money we're able to take in without
					shifting our paradigm, so, the choice is to make a change or stay like this -- and this?
					This kinda sucks.
				</p>
			</div>
		</section>
	</article>
</main>

<theme-selector {themes} defaultTheme={randoTheme}></theme-selector>

<style>
.attr {

  top: 7rem;
		font-size: clamp(1rem, 0.625rem + 1.6667vw, 1.5rem);
  position: sticky;
  margin-block: 0;
}
	main {
		color: rgb(var(--foreground));
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		font-family: var(--rando-font);
		position: relative;
		backdrop-filter: blur(10px);
	}
	.bg {
		background-image: var(--wallpaper);
		background-size: cover;
		background-position: center;
		z-index: 0;
		content: '';
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	article, .title-section {
	background-image: var(--wallpaper);
	background-position: center;
	background-size: cover;
	background-attachment: fixed;

	}
	article {

		padding-block: 22rem;

		width: min(555px, 90vw);
	}
	.body-text,
	.title-text {
		background: rgba(var(--background), 0.87);
		backdrop-filter: blur(10px) saturate(3.3);
	}
	.title-section {
		height: 22rem;
		// padding-block: 3rem;
		position: sticky;
		top: -9rem;
		z-index: 10;
	}
	.title-text {
		position: sticky;
		top: 4rem;
		padding: 0 2rem 1rem 2rem;
		margin: 0;
		& .title-top,
		.title,
		.title-bottom,
		.name {
			margin-block: 0;
		}
		.title-top {
			margin-inline: 2rem;
		}
		.title-bottom {
			margin-inline: 3rem;
		}
		.title {
			margin-inline: 1rem;
		}
	}
	.title {
		position: sticky;
		margin-bottom: 10px !important;
		top: 3rem;
		font-size: clamp(1.25rem, -0.2875rem + 6.8333vw, 3.3rem);
	}
	.body-text {

	}
	h2, .body-text h3 {
	position: sticky;
	padding-inline: 2rem;
	background: rgba(var(--color7));
	color: rgba(var(--color0));

	}
	h2 {

	top: 13rem;
	}
	.body-text h3 {

	top: 15rem;
	}
	ul {
	margin-block: 0;
	list-style-type: none;
	}
	p , li {
	padding-inline: 2rem;
		margin: 0;
		padding: 1rem 2rem;
		font-size: 1.1rem;
		line-height: 2rem;
	}
	img
 { width: 100%;

 padding-inline: 2rem;
		object-fit: contain;

	}
	img {
		margin-bottom: 33px;
	}
</style>
