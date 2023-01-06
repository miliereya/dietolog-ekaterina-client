/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { GlobalContext } from '../../context/mainContext'
import { IPackage } from '../../models/IPackage'
import PackageItem from '../PackageItem'
import s from './DetailedPrices.module.css'

export const DetailedPrices = () => {
	const language = GlobalContext().language
	const {
		service_type,
		remark,
		constructor_menu,
		consultation,
		online,
		offline,
		food_schema,
		package_lite,
		package_pro,
		package_re_consult,
		package_standard,
	} = language.detailed_prices

	const packages: IPackage[] = [
		{
			title: package_lite.title,
			description: package_lite.description,
			col_1_heading: package_lite.heading_col_1,
			col_2_heading: package_lite.heading_col_2,
			col_1_post_heading: package_lite.post_col_1,
			col_2_post_heading: package_lite.post_col_2,
			services: [
				{
					title: `${consultation} + ${food_schema} ${online}`,
					col_1_price: 1800,
					col_2_price: 3000,
				},
				{
					title: `${consultation} + ${food_schema} ${offline}`,
					col_1_price: 2100,
					col_2_price: 3600,
				},
				{
					title: `${consultation} + ${constructor_menu} ${online}`,
					col_1_price: 2500,
					col_2_price: 3700,
				},
				{
					title: `${consultation} + ${constructor_menu} ${offline}`,
					col_1_price: 2800,
					col_2_price: 4300,
				},
			],
		},
		{
			title: package_standard.title,
			description: package_standard.description,
			col_1_heading: package_standard.heading_col_1,
			col_2_heading: package_standard.heading_col_2,
			col_1_post_heading: package_standard.post_col_1,
			col_2_post_heading: package_standard.post_col_2,
			services: [
				{
					title: `${consultation} + ${food_schema} ${online}`,
					col_1_price: 2300,
					col_2_price: 3500,
				},
				{
					title: `${consultation} + ${food_schema} ${offline}`,
					col_1_price: 2600,
					col_2_price: 3800,
				},
				{
					title: `${consultation} + ${constructor_menu} ${online}`,
					col_1_price: 3000,
					col_2_price: 4200,
				},
				{
					title: `${consultation} + ${constructor_menu} ${offline}`,
					col_1_price: 3300,
					col_2_price: 4800,
				},
			],
		},
		{
			title: package_pro.title,
			description: package_pro.description,
			col_1_heading: package_pro.heading_col_1,
			col_2_heading: package_pro.heading_col_2,
			col_1_post_heading: package_pro.post_col_1,
			col_2_post_heading: package_pro.post_col_2,
			services: [
				{
					title: `${consultation} + ${food_schema} ${online}`,
					col_1_price: 3000,
					col_2_price: 4200,
				},
				{
					title: `${consultation} + ${food_schema} ${offline}`,
					col_1_price: 3300,
					col_2_price: 4800,
				},
				{
					title: `${consultation} + ${constructor_menu} ${online}`,
					col_1_price: 4500,
					col_2_price: 5700,
				},
				{
					title: `${consultation} + ${constructor_menu} ${offline}`,
					col_1_price: 4800,
					col_2_price: 6300,
				},
			],
		},
		{
			title: package_re_consult.title + ' *',
			description: package_re_consult.description,
			col_1_heading: package_re_consult.heading_col_1,
			col_2_heading: package_re_consult.heading_col_2,
			services: [
				{
					title: `${consultation} ${online}`,
					col_1_price: 700,
					col_2_price: 1700,
				},
				{
					title: `${consultation} ${offline}`,
					col_1_price: 1000,
					col_2_price: 2000,
				},
				{
					title: `${consultation} + ${constructor_menu} ${online}`,
					col_1_price: 1500,
					col_2_price: 2500,
				},
				{
					title: `${consultation} + ${constructor_menu} ${offline}`,
					col_1_price: 1800,
					col_2_price: 2800,
				},
			],
		},
	]

	return (
		<div className={s.section}>
			<img
				src='/detailed_prices/background_1.png'
				alt='food background'
				className={s.background_1}
			/>
			<img
				src='/detailed_prices/background_2.png'
				alt='food background'
				className={s.background_2}
			/>
			<img
				src='/detailed_prices/background_3.png'
				alt='food background'
				className={s.background_3}
			/>
			<img
				src='/detailed_prices/background_4.png'
				alt='food background'
				className={s.background_4}
			/>
			<div className='container'>
				{packages.map((p, index) => (
					<PackageItem
						pkg={p}
						key={p.title}
						isInfoOnLeftSide={index % 2 == 0}
					/>
				))}
				<p className={s.remark}>* {remark}</p>
				<Link href='/'>
					<p className={s.btn}>{language.global._return}</p>
				</Link>
			</div>
		</div>
	)
}
