// export const checkAccess = (access, userRole) => access.includes(userRole);

export const checkAccess = (access, userRole) => {
	if (!Array.isArray(access)) {
		console.error('access is not an array');
		return false;
	}

	return access.includes(userRole);
};
