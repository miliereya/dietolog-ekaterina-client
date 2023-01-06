import { FC } from 'react'
import { GlobalContext } from '../../context/mainContext'
import { IPackage } from '../../models/IPackage'
import s from './PackageItem.module.css'

interface PackageItemProps {
	pkg: IPackage
	isInfoOnLeftSide: boolean
}

const PackageItem: FC<PackageItemProps> = ({ pkg, isInfoOnLeftSide }) => {
	const {
		title,
		description,
		col_1_heading,
		col_2_heading,
		col_1_post_heading,
		col_2_post_heading,
		services,
	} = pkg

	const { service_type } = GlobalContext().language.detailed_prices

	return (
		<div className={s.section}>
			<div
				className={
					isInfoOnLeftSide ? s.info_wrapper_left : s.info_wrapper_right
				}
			>
				<p className={s.heading}>{title}</p>
				<p className={s.description}>{description}</p>
			</div>
			<table className={s.table}>
				<thead>
					<tr className={s.table_head}>
						<th className={s.th_1}>
							<p className={s.table_heading}>{service_type}</p>
						</th>
						<th className={s.th_2}>
							<p className={s.table_heading}>{col_1_heading}</p>
							{col_1_post_heading && (
								<p className={s.table_post_heading}>{col_1_post_heading}</p>
							)}
						</th>
						<th className={s.th_3}>
							<p className={s.table_heading}>{col_2_heading}</p>
							{col_2_post_heading && (
								<p className={s.table_post_heading}>{col_2_post_heading}</p>
							)}
						</th>
					</tr>
				</thead>
				<tbody>
					{services.map((service, index) => {
						const { title, col_1_price, col_2_price } = service

						return (
							<tr
								key={title}
								style={
									index % 2 == 0
										? {}
										: { backgroundColor: 'var(--color-primary)' }
								}
								className={s.row}
							>
								<td className={s.td_1}>
									<p className={s.row_title}>{title}</p>
								</td>
								<td className={s.td_2}>
									<p className={s.price}>{col_1_price} ₴</p>
								</td>
								<td className={s.td_3}>
									<p className={s.price}>{col_2_price} ₴</p>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<table className={s.table_small}>
				<thead className={s.t_head_wrapper}>
					<tr className={s.table_head_small}>
						<th className={s.th_2_small}>
							<p className={s.table_heading}>{col_1_heading}</p>
							{col_1_post_heading && (
								<p className={s.table_post_heading}>{col_1_post_heading}</p>
							)}
						</th>
					</tr>
				</thead>
				<tbody className={s.t_body_small}>
					{services.map((service, index) => {
						const { title, col_1_price } = service

						return (
							<tr
								key={title}
								style={
									index % 2 == 0
										? {}
										: { backgroundColor: 'var(--color-primary)' }
								}
								className={s.row_small}
							>
								<td className={s.td_1_small}>
									<p className={s.row_title_small}>{title}</p>
								</td>
								<td className={s.td_2_small}>
									<p className={s.price}>{col_1_price} ₴</p>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<table className={s.table_small}>
				<thead className={s.t_head_wrapper}>
					<tr className={s.table_head_small}>
						<th className={s.th_2_small}>
							<p className={s.table_heading}>{col_2_heading}</p>
							{col_1_post_heading && (
								<p className={s.table_post_heading}>{col_2_post_heading}</p>
							)}
						</th>
					</tr>
				</thead>
				<tbody className={s.t_body_small}>
					{services.map((service, index) => {
						const { title, col_2_price } = service

						return (
							<tr
								key={title}
								style={
									index % 2 == 0
										? {}
										: { backgroundColor: 'var(--color-primary)' }
								}
								className={s.row_small}
							>
								<td className={s.td_1_small}>
									<p className={s.row_title_small}>{title}</p>
								</td>
								<td className={s.td_2_small}>
									<p className={s.price}>{col_2_price} ₴</p>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default PackageItem
