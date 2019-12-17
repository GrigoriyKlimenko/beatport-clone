import React from 'react';
import styles from './GenresDrop.module.css';

const GenresDrop = () => (
	<div className={styles.genres_drop}>
		<div className={styles.genres_drop_header}>
			<ul className={styles.genres_col}>
				<li className={styles.genres_list_item}>
					<a href="/best-new-tracks" className={styles.genres_col_title}>Best New Tracks</a>
					<span className={styles.genres_col_description}>This month’s latest cuts</span>
				</li>
			</ul>
			<ul className={styles.genres_col}>
				<li className={styles.genres_list_item}>
					<a href="/Best-New-Hype" className={styles.genres_col_title}>Best New Hype</a>
					<span className={styles.genres_col_description}>Go deeper than the Top 100</span>
					<span className={styles.genres_marker}>New</span>
				</li>
			</ul>
			<ul className={styles.genres_col}>
				<li className={styles.genres_list_item}>
					<a href="/closing-essentials-10-2019" className={styles.genres_col_title}>Closing Essentials</a>
					<span className={styles.genres_col_description}>End your set on a high note</span>
					<span className={styles.genres_marker}>New</span>
				</li>
			</ul>
			<ul className={styles.genres_col}>
				<li className={styles.genres_list_item}>
					<a href="https://linkplaylists.beatport.com/" className={styles.genres_col_title}>Beatport LINK Playlists</a>
					<span className={styles.genres_col_description}>Discover Expertly Curated Content</span>
					<span className={styles.genres_marker}>New</span>
				</li>
			</ul>
		</div>

		<div className={styles.genres_drop_list}>
			<ul className={styles.genres_col}>
				<li className={styles.genres_list_item}>
					<a href="/genre/afro-house/89">Afro House</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/bass-house/91">Bass House</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/big-room/79">Big Room</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/breaks/9">Breaks</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/dj-tools/16">DJ Tools</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/dance/39">Dance</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/deep-house/12">Deep House</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/drum-and-bass/1">Drum &amp; Bass</a>
				</li>
			</ul>

			<ul className={styles.genres_col}>
				<li className={styles.genres_list_item}>
					<a href="/genre/dubstep/18">Dubstep</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/electro-house/17">Electro House</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/electronica-downtempo/3">Electronica / Downtempo</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/funky-groove-jackin-house/81">Funky / Groove / Jackin' House</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/future-house/65">Future House</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/garage-bassline-grime/86">Garage / Bassline / Grime</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/hard-dance/8">Hard Dance</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/hardcore-hard-techno/2">Hardcore / Hard Techno</a>
				</li>
			</ul>

			<ul className={styles.genres_col}>
				<li className={styles.genres_list_item}>
					<a href="/genre/hip-hop-r-and-b/38">Hip-Hop / R&amp;B</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/house/5">House</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/indie-dance/37">Indie Dance</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/leftfield-bass/85">Leftfield Bass</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/leftfield-house-and-techno/80">Leftfield House &amp; Techno</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/melodic-house-and-techno/90">Melodic House &amp; Techno</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/minimal-deep-tech/14">Minimal / Deep Tech</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/nu-disco-disco/50">Nu Disco / Disco</a>
				</li>
			</ul>

			<ul className={styles.genres_col}>
				<li className={styles.genres_list_item}>
					<a href="/genre/progressive-house/15">Progressive House</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/psy-trance/13">Psy-Trance</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/reggae-dancehall-dub/41">Reggae / Dancehall / Dub</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/tech-house/11">Tech House</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/techno/6">Techno</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/trance/7">Trance</a>
				</li>
				<li className={styles.genres_list_item}>
					<a href="/genre/trap-future-bass/87">Trap / Future Bass</a>
				</li>
			</ul>
		</div>
	</div>
)

export default GenresDrop