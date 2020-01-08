"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var handler_1 = require("./lib/handler");
function useForm(props) {
    var id = props.id, _a = props.debug, debug = _a === void 0 ? true : _a, extraData = props.extraData;
    var _b = react_1.useState(false), submitted = _b[0], setSubmitted = _b[1];
    var _c = react_1.useState(false), submitting = _c[0], setSubmitting = _c[1];
    var _d = react_1.useState(), error = _d[0], setError = _d[1];
    var _e = react_1.useState(), response = _e[0], setResponse = _e[1];
    react_1.useEffect(function () {
        if (error && debug) {
            handler_1.errorHandler(error);
        }
    }, [debug, error]);
    function submit(event) {
        event.preventDefault();
        if (!id) {
            handler_1.noIdHandler();
            return;
        }
        var data = new FormData(event.currentTarget);
        if (typeof extraData === 'object') {
            for (var item in extraData) {
                if (extraData.hasOwnProperty(item)) {
                    data.append(item, extraData[item]);
                }
            }
        }
        setSubmitted(false);
        setError(undefined);
        setResponse(undefined);
        setSubmitting(true);
        fetch("https://formcarry.com/s/" + id, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: data,
        })
            .then(function (res) { return res.json(); })
            .then(function (res) {
            if (res.code === 200) {
                setSubmitted(true);
                setResponse(res);
            }
            else {
                setError(res);
            }
        })
            .catch(function (err) {
            setError(err);
        })
            .finally(function () {
            setSubmitting(false);
        });
    }
    return { state: { error: error, response: response, submitting: submitting, submitted: submitted }, submit: submit };
}
exports.useForm = useForm;
//# sourceMappingURL=useForm.js.map