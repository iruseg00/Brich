import jwt from 'jsonwebtoken';
const { sign, decode, verify } = jwt;

let secret = 'blasuper123secretbla';

class JWTService {
	generate(data) {
		let accessToken = sign(
			{
				id: data.id,
				role: data.role,
			},
			secret,
			{ expiresIn: '5m' }
		);
		let refreshToken = sign({ id: data.id }, secret, { expiresIn: '3d' });
		return {
			accessToken,
			refreshToken,
			expires_in: decode(accessToken).exp,
		};
	}

	validate(token) {
		try {
			let decoded = verify(token, secret);
			return decoded;
		} catch (err) {
			return false;
		}
	}

	getInfo(token) {
		let err = decode(token, secret);
		return err;
	}
}

export default new JWTService();
