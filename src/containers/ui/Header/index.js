import React from 'react'

const Header = ({title}) => {
    return (
		<header className="navbar-fixed">
			<nav>
				<div className="nav-wrapper black">
					<a class="center brand-logo">{title}</a>
					{/* <form>
						<div class="input-field">
							<input id="search" type="search" required />
							<label class="label-icon" for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form> */}
				</div>
			</nav>
		</header>
    )
}

export default Header
