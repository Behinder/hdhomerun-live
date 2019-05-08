
// these come from libhdhomerun/hdhomerun_pkt.h
HDHOMERUN_TYPE_DISCOVER_REQ = 0x0002
HDHOMERUN_TYPE_DISCOVER_RPY = 0x0003
HDHOMERUN_TYPE_GETSET_REQ = 0x0004
HDHOMERUN_TYPE_GETSET_RPY = 0x0005

HDHOMERUN_TYPE_UPGRADE_REQ = 0x0006
HDHOMERUN_TYPE_UPGRADE_RPY = 0x0007

HDHOMERUN_TAG_DEVICE_TYPE = 0x01
HDHOMERUN_TAG_DEVICE_ID = 0x02
HDHOMERUN_TAG_GETSET_NAME = 0x03
HDHOMERUN_TAG_GETSET_VALUE = 0x04
HDHOMERUN_TAG_GETSET_LOCKKEY = 0x15
HDHOMERUN_TAG_ERROR_MESSAGE = 0x05
HDHOMERUN_TAG_TUNER_COUNT = 0x10
HDHOMERUN_DEVICE_TYPE_WILDCARD = 0xFFFFFFFF
HDHOMERUN_DEVICE_TYPE_TUNER = 0x00000001
HDHOMERUN_DEVICE_ID_WILDCARD = 0xFFFFFFFF
HDHOMERUN_TAG_DEVICE_AUTH_STR = 0x2B
HDHOMERUN_TAG_BASE_URL = 0x2A
HDHOMERUN_TAG_LINEUP = 0x27

module.exports = {
	types: {
		disc_req: HDHOMERUN_TYPE_DISCOVER_REQ,
		disc_rpy: HDHOMERUN_TYPE_DISCOVER_RPY,
		getset_req: HDHOMERUN_TYPE_GETSET_REQ,
		getset_rpy: HDHOMERUN_TYPE_GETSET_RPY,
        upgrade_req: HDHOMERUN_TYPE_UPGRADE_REQ,
        upgrade_rpy: HDHOMERUN_TYPE_UPGRADE_RPY
	},
	tags: {
		device_type: { value: HDHOMERUN_TAG_DEVICE_TYPE, size: 4 },
		device_id: { value: HDHOMERUN_TAG_DEVICE_ID, size: 4 },
		getset_name: { value: HDHOMERUN_TAG_GETSET_NAME, size: undefined },
		getset_value: { value: HDHOMERUN_TAG_GETSET_VALUE, size: undefined },
		getset_lockkey: { value: HDHOMERUN_TAG_GETSET_LOCKKEY, size: 4 },
		error_message: { value: HDHOMERUN_TAG_ERROR_MESSAGE, size: undefined },
		tuner_count: { value: HDHOMERUN_TAG_TUNER_COUNT, size: 1 },
        device_auth_str: { value: HDHOMERUN_TAG_DEVICE_AUTH_STR, size: undefined },
        base_url: { value: HDHOMERUN_TAG_BASE_URL, size: undefined },
        lineup: { value: HDHOMERUN_TAG_LINEUP, size: undefined }
	},
	dev_values: {
		device_type_tuner: HDHOMERUN_DEVICE_TYPE_TUNER,
		device_type_any: HDHOMERUN_DEVICE_TYPE_WILDCARD,
		device_id_any: HDHOMERUN_DEVICE_ID_WILDCARD
	},
	HEADER_LEN: 4,
	MAX_BUFSIZE: 3072
};
