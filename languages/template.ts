export interface LanguageTemplate {
	mark: string

	global: {
		error: string
		filed_is_required: string
		_return: string
		apply: string
		privacy: string
		order: string
		_continue: string
	}

	header: {
		main: string
		about: string
		consults_and_rates: string
		turnkey_solutions: string
		contacts: string
	}

	_404: {
		heading: string
		text_top: string
		text_mid: string
		text_bot: string
		back_to_main: string
	}

	contacts: {
		my_contacts: string
		addres_first_pt: string
		addres_second_pt: string
		name: string
		speech: string
	}

	sign_for_consult: {
		sign_for_consult: string
		your_name: string
		phone: string
		email: string
		enroll: string
		response: string
		field_is_required: string
		invalid_phone: string
		invalid_email: string
	}

	reviews: {
		heading: string
		add_review: string
		response: string
	}

	leave_review: {
		your_review: string
		your_name: string
		review: string
		send: string
		review_min_max_length: string
	}

	main: {
		name: string
		last_name: string
		post_name: string
		description: string
		sign_for_consult: string
	}

	about: {
		my_approach: string
		col_1_text_1: string
		col_1_text_2: string
		worth_1: string
		worth_2: string
		worth_3: string

		for_who: string
		for_who_text_1: string
		for_who_text_2: string
		for_who_text_3: string
		for_who_text_4: string
		for_who_text_5: string
		for_who_text_6: string

		not_suitable: string
		not_suitable_text_1: string
		not_suitable_text_2: string

		my_education: string
		reviews: string
	}

	prepared_solutions: {
		prepared_solutions: string
		col_1_part_1: string
		col_1_part_2: string
		col_2_part_1: string
		col_2_part_2: string

		constructor_heading: string
		constructor_1: string
		constructor_2: string
		constructor_3: string
		constructor_4: string
		constructor_5: string

		constructor_col_1_part_1: string
		constructor_col_1_part_2: string
		constructor_col_1_part_3: string

		constructor_col_2_part_1: string
		constructor_col_2_part_2: string
		constructor_col_2_part_3: string

		programs_and_checks: string
		help_to_pick: string
	}

	detailed_prices: {
		service_type: string
		remark: string

		consultation: string
		online: string
		offline: string
		food_schema: string
		constructor_menu: string

		package_lite: {
			title: string
			description: string
			heading_col_1: string
			heading_col_2: string
			post_col_1: string
			post_col_2: string
		}
		package_standard: {
			title: string
			description: string
			heading_col_1: string
			heading_col_2: string
			post_col_1: string
			post_col_2: string
		}
		package_pro: {
			title: string
			description: string
			heading_col_1: string
			heading_col_2: string
			post_col_1: string
			post_col_2: string
		}
		package_re_consult: {
			title: string
			description: string
			heading_col_1: string
			heading_col_2: string
		}
	}

	program: {
		included_to_program: string
		choose_radios: string
		back_to_programs: string
		success_program: string
		_program: string
	}

	program_popup: {
		your_order: string
		chosen_params: string
	}
}
