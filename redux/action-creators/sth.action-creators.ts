import { STHActionTypeEnum } from '../actions-enums'
import { ISTHAction } from '../actions-interface'

// ---

export const sthActionCreator = (): ISTHAction => ({
	type: STHActionTypeEnum.STH,
	payload: 'sth'
})

// export const getStudentInfo = (id) => async dispatch => {

// 	const request = new StudentRequest();
// 	request.setId("555");
// 	var metadata = { 'token': 'value1' };
// 	var URL = "https://localhost:5001";
// 	var client = new StudentClient(URL);
// 	var call = client.getStudentInformation(request, metadata, function (err, response) {

// 			if (err) {
// 					console.log(err.code);
// 					console.log(err.message);
// 			} else {
// 					dispatch({ type: STUDENT_INFO, payload: response.getMessage() })
// 			}
// 	});
// 	call.on('status', function (status) {
// 			//console.log(status.details);
// 	});

// 	};
