/**
  * @module meraki
  *
  * The Cisco Meraki Dashboard API is a modern REST API based on the [OpenAPI](https://swagger.
  * io/docs/specification/about/) specification.  ## What can the API be used for? The Dashboard
  * API can be used for many purposes. It’s meant to be an open-ended tool. Here are some examples
  * of use cases:  * Add new organizations, admins, networks, devices, VLANs, and more * Configure
  * networks at scale * Automatically on-board and off-board new employees’ teleworker setups *
  * Build your own dashboard for store managers, field techs, or unique use cases  ## Enabling the
  * Dashboard API 1. Begin by logging into [Meraki Dashboard](https://dashboard.meraki.com) and
  * navigating to **Organization > Settings**  2. Locate the section titled **Dashboard API
  * access** and select **Enable Access**, then **Save** your changes  3. After enabling the API,
  * choose your username at the top-right of the Meraki Dashboard and select **my profile**  4.
  * Locate the section titled **Dashboard API access** and select **Generate new API key**  *Note:
  * The API key is associated with a Dashboard administrator account. You can generate, revoke, and
  * regenerate your API key on your profile.*  **Keep your API key safe as it provides
  * authentication to all of your organizations with the API enabled. If your API key is shared,
  * you can regenerate your API key at any time. This will revoke the existing API key.**  Copy and
  * store your API key in a safe place. Dashboard does not store API keys in plaintext for security
  * reasons, so this is the only time you will be able to record it. If you lose or forget your API
  * key, you will have to revoke it and generate a new one.  Every request must specify an API key
  * via a request header.  The API key must be specified in the URL header. The API will return a
  * 404 (rather than a 403) in response to a request with a missing or incorrect API key in order
  * to prevent leaking the existence of resources to unauthorized users.  `X-Cisco-Meraki-API-Key:
  * <secret key>`  Read more about API [authorization](../api/#/python/getting-started/authorizing-
  * your-client)   ## Versioning Once an API version is released, we will make only backwards-
  * compatible changes to it. Backwards-compatible changes include:  * Adding new API resources  *
  * Adding new optional request parameters to existing API methods  * Adding new properties to
  * existing API responses  * Changing the order of properties in existing API responses  ## Rate
  * Limit * The Dashboard API is limited to **5 calls per second**, per organization. * A burst of
  * 5 additional calls are allowed in the first second, so a maximum of 15 calls in the first 2
  * seconds. * The rate limiting technique is based off of the [token bucket model](https://en.
  * wikipedia.org/wiki/Token_bucket). * An error with a `429` status code will be returned when the
  * rate limit has been exceeded. * Expect to backoff for 1 - 2 seconds if the limit has been
  * exceeded. You may have to wait potentially longer if a large number of requests were made
  * within this timeframe.   ## Additional Details Identifiers in the API are opaque strings. A
  * `{networkId}`, for example, might be the string “126043”, whereas an `{orderId}` might contain
  * characters, such as “4S1234567”. Client applications must not try to parse them as numbers.
  * Even identifiers that look like numbers might be too long to encode without loss of precision
  * in Javascript, where the only numeric type is IEEE 754 floating point.  Verbs in the API follow
  * the usual REST conventions:  `GET` returns the value of a resource or a list of resources,
  * depending on whether an identifier is specified. For example, a `GET` of `/v0/organizations`
  * returns a list of organizations, whereas a `GET` of `/v0/organizations/{organizationId}`
  * returns a particular organization.  `POST` adds a new resource, as in a `POST` to
  * `/v0/organizations/{organizationId}/admins`, or performs some other non-idempotent change.
  * `PUT` updates a resource. `PUTs` are idempotent; they update a resource, creating it first if
  * it does not already exist. A `PUT` should specify all the fields of a resource; the API will
  * revert omitted fields to their default value.  `DELETE` removes a resource.
  */

'use strict';

const Configuration = require('./configuration');
const NetworksController = require('./Controllers/NetworksController');
const MVSenseController = require('./Controllers/MVSenseController');
const AlertSettingsController = require('./Controllers/AlertSettingsController');
const AdminsController = require('./Controllers/AdminsController');
const ActionBatchesController = require('./Controllers/ActionBatchesController');
const APIUsageController = require('./Controllers/APIUsageController');
const BluetoothClientsController = require('./Controllers/BluetoothClientsController');
const CamerasController = require('./Controllers/CamerasController');
const ClientsController = require('./Controllers/ClientsController');
const ConfigTemplatesController = require('./Controllers/ConfigTemplatesController');
const DevicesController = require('./Controllers/DevicesController');
const MXCellularFirewallController = require('./Controllers/MXCellularFirewallController');
const MXL3FirewallController = require('./Controllers/MXL3FirewallController');
const MXL7ApplicationCategoriesController =
  require('./Controllers/MXL7ApplicationCategoriesController');
const MXL7FirewallController = require('./Controllers/MXL7FirewallController');
const MXVPNFirewallController = require('./Controllers/MXVPNFirewallController');
const MRL3FirewallController = require('./Controllers/MRL3FirewallController');
const GroupPoliciesController = require('./Controllers/GroupPoliciesController');
const HTTPServersController = require('./Controllers/HTTPServersController');
const MerakiAuthUsersController = require('./Controllers/MerakiAuthUsersController');
const OpenAPISpecController = require('./Controllers/OpenAPISpecController');
const OrganizationAlertSettingsController =
  require('./Controllers/OrganizationAlertSettingsController');
const OrganizationsController = require('./Controllers/OrganizationsController');
const PIIController = require('./Controllers/PIIController');
const RadioSettingsController = require('./Controllers/RadioSettingsController');
const SAMLRolesController = require('./Controllers/SAMLRolesController');
const SecurityEventsController = require('./Controllers/SecurityEventsController');
const IntrusionSettingsController = require('./Controllers/IntrusionSettingsController');
const MalwareSettingsController = require('./Controllers/MalwareSettingsController');
const GeofenceRegionsController = require('./Controllers/GeofenceRegionsController');
const GeofencesController = require('./Controllers/GeofencesController');
const NamedTagScopeController = require('./Controllers/NamedTagScopeController');
const TagsController = require('./Controllers/TagsController');
const SMController = require('./Controllers/SMController');
const SplashLoginAttemptsController = require('./Controllers/SplashLoginAttemptsController');
const SplashSettingsController = require('./Controllers/SplashSettingsController');
const SsidsController = require('./Controllers/SsidsController');
const SwitchSettingsController = require('./Controllers/SwitchSettingsController');
const SwitchPortsController = require('./Controllers/SwitchPortsController');
const SwitchStacksController = require('./Controllers/SwitchStacksController');
const SyslogServersController = require('./Controllers/SyslogServersController');
const TrafficShapingController = require('./Controllers/TrafficShapingController');
const UplinkInterfaceSettingsController =
  require('./Controllers/UplinkInterfaceSettingsController');
const WebhookLogsController = require('./Controllers/WebhookLogsController');
const ContentFilteringCategoriesController =
  require('./Controllers/ContentFilteringCategoriesController');
const ContentFilteringRulesController = require('./Controllers/ContentFilteringRulesController');
const FirewalledServicesController = require('./Controllers/FirewalledServicesController');
const IDSAlertsController = require('./Controllers/IDSAlertsController');
const MX1ManyNATRulesController = require('./Controllers/MX1ManyNATRulesController');
const MX11NATRulesController = require('./Controllers/MX11NATRulesController');
const MXPortForwardingRulesController = require('./Controllers/MXPortForwardingRulesController');
const StaticRoutesController = require('./Controllers/StaticRoutesController');
const UplinkSettingsController = require('./Controllers/UplinkSettingsController');
const VlansController = require('./Controllers/VlansController');
const WirelessHealthController = require('./Controllers/WirelessHealthController');
const MoveNetworkSmDevicesModel = require('./Models/MoveNetworkSmDevicesModel');
const AuthModeEnum = require('./Models/AuthModeEnum');
const LockNetworkSmDevicesModel = require('./Models/LockNetworkSmDevicesModel');
const CheckinNetworkSmDevicesModel = require('./Models/CheckinNetworkSmDevicesModel');
const UpdateNetworkSsidsPlashSettingsModel =
  require('./Models/UpdateNetworkSsidsPlashSettingsModel');
const UpdateNetworkSmDevicesTagsModel = require('./Models/UpdateNetworkSmDevicesTagsModel');
const UpdateNetworkSmDeviceFieldsModel = require('./Models/UpdateNetworkSmDeviceFieldsModel');
const WipeNetworkSmDeviceModel = require('./Models/WipeNetworkSmDeviceModel');
const AddNetworkSmProfileUmbrellaModel = require('./Models/AddNetworkSmProfileUmbrellaModel');
const CreateNetworkSmAppPolarisModel = require('./Models/CreateNetworkSmAppPolarisModel');
const CreateNetworkSmProfileUmbrellaModel = require('./Models/CreateNetworkSmProfileUmbrellaModel');
const UpdateNetworkSmProfileUmbrellaModel = require('./Models/UpdateNetworkSmProfileUmbrellaModel');
const UpdateNetworkSmProfileClarityModel = require('./Models/UpdateNetworkSmProfileClarityModel');
const AddNetworkSmProfileClarityModel = require('./Models/AddNetworkSmProfileClarityModel');
const UpdateNetworkSmTagModel = require('./Models/UpdateNetworkSmTagModel');
const CreateNetworkSmProfileClarityModel = require('./Models/CreateNetworkSmProfileClarityModel');
const UpdateNetworkSmTargetGroupModel = require('./Models/UpdateNetworkSmTargetGroupModel');
const CreateNetworkSmTagModel = require('./Models/CreateNetworkSmTagModel');
const UpdateNetworkSmAppPolarisModel = require('./Models/UpdateNetworkSmAppPolarisModel');
const UpdateNetworkSmGeofenceRegionModel = require('./Models/UpdateNetworkSmGeofenceRegionModel');
const CreateNetworkSmGeofenceRegionModel = require('./Models/CreateNetworkSmGeofenceRegionModel');
const AllowedFileModel = require('./Models/AllowedFileModel');
const CreateNetworkSmGeofenceModel = require('./Models/CreateNetworkSmGeofenceModel');
const UpdateNetworkSmGeofenceModel = require('./Models/UpdateNetworkSmGeofenceModel');
const CreateNetworkSmTargetGroupModel = require('./Models/CreateNetworkSmTargetGroupModel');
const ProtectedNetworksModel = require('./Models/ProtectedNetworksModel');
const WhitelistedRuleModel = require('./Models/WhitelistedRuleModel');
const UpdateNetworkSecurityMalwareSettingsModel =
  require('./Models/UpdateNetworkSecurityMalwareSettingsModel');
const AllowedUrlModel = require('./Models/AllowedUrlModel');
const AddNetworkSwitchStackModel = require('./Models/AddNetworkSwitchStackModel');
const Tag2Model = require('./Models/Tag2Model');
const Network2Model = require('./Models/Network2Model');
const UpdateOrganizationSamlRoleModel = require('./Models/UpdateOrganizationSamlRoleModel');
const UpdateNetworkSecurityIntrusionSettingsModel =
  require('./Models/UpdateNetworkSecurityIntrusionSettingsModel');
const CreateNetworkPiiRequestModel = require('./Models/CreateNetworkPiiRequestModel');
const UpdateNetworkDeviceWirelessRadioSettingsModel =
  require('./Models/UpdateNetworkDeviceWirelessRadioSettingsModel');
const CreateOrganizationSamlRoleModel = require('./Models/CreateOrganizationSamlRoleModel');
const UpdateOrganizationSecurityIntrusionSettingsModel =
  require('./Models/UpdateOrganizationSecurityIntrusionSettingsModel');
const IpsecPoliciesModel = require('./Models/IpsecPoliciesModel');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('./Models/UpdateOrganizationThirdPartyVPNPeersModel');
const PeerModel = require('./Models/PeerModel');
const Type5Enum = require('./Models/Type5Enum');
const UpdateOrganizationSnmpModel = require('./Models/UpdateOrganizationSnmpModel');
const ClaimOrganizationModel = require('./Models/ClaimOrganizationModel');
const UpdateOrganizationAlertSettingsModel =
  require('./Models/UpdateOrganizationAlertSettingsModel');
const DefaultDestinations1Model = require('./Models/DefaultDestinations1Model');
const Alert1Model = require('./Models/Alert1Model');
const UpdateOrganizationModel = require('./Models/UpdateOrganizationModel');
const CloneOrganizationModel = require('./Models/CloneOrganizationModel');
const UpdateNetworkGroupPolicyModel = require('./Models/UpdateNetworkGroupPolicyModel');
const UpdateNetworkHttpServerModel = require('./Models/UpdateNetworkHttpServerModel');
const CreateNetworkHttpServersWebhookTestModel =
  require('./Models/CreateNetworkHttpServersWebhookTestModel');
const CreateOrganizationModel = require('./Models/CreateOrganizationModel');
const L7FirewallRuleModel = require('./Models/L7FirewallRuleModel');
const Type2Enum = require('./Models/Type2Enum');
const CreateNetworkHttpServerModel = require('./Models/CreateNetworkHttpServerModel');
const PerClientBandwidthLimitsModel = require('./Models/PerClientBandwidthLimitsModel');
const BandwidthLimits1Model = require('./Models/BandwidthLimits1Model');
const L3FirewallRuleModel = require('./Models/L3FirewallRuleModel');
const TrafficShapingRuleModel = require('./Models/TrafficShapingRuleModel');
const Type1Enum = require('./Models/Type1Enum');
const BandwidthLimitsModel = require('./Models/BandwidthLimitsModel');
const FirewallAndTrafficShapingModel = require('./Models/FirewallAndTrafficShapingModel');
const Settings1Enum = require('./Models/Settings1Enum');
const DefinitionModel = require('./Models/DefinitionModel');
const SaturdayModel = require('./Models/SaturdayModel');
const SundayModel = require('./Models/SundayModel');
const BandwidthModel = require('./Models/BandwidthModel');
const SettingsEnum = require('./Models/SettingsEnum');
const TuesdayModel = require('./Models/TuesdayModel');
const WednesdayModel = require('./Models/WednesdayModel');
const ThursdayModel = require('./Models/ThursdayModel');
const FridayModel = require('./Models/FridayModel');
const CreateNetworkGroupPolicyModel = require('./Models/CreateNetworkGroupPolicyModel');
const SchedulingModel = require('./Models/SchedulingModel');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('./Models/UpdateNetworkSsidL3FirewallRulesModel');
const Rule4Model = require('./Models/Rule4Model');
const MondayModel = require('./Models/MondayModel');
const TypeEnum = require('./Models/TypeEnum');
const Rule3Model = require('./Models/Rule3Model');
const UpdateNetworkL7FirewallRulesModel = require('./Models/UpdateNetworkL7FirewallRulesModel');
const Rule2Model = require('./Models/Rule2Model');
const PolicyEnum = require('./Models/PolicyEnum');
const UpdateOrganizationVpnFirewallRulesModel =
  require('./Models/UpdateOrganizationVpnFirewallRulesModel');
const Policy1Enum = require('./Models/Policy1Enum');
const BlinkNetworkDeviceLedsModel = require('./Models/BlinkNetworkDeviceLedsModel');
const RuleModel = require('./Models/RuleModel');
const UpdateNetworkL3FirewallRulesModel = require('./Models/UpdateNetworkL3FirewallRulesModel');
const UpdateOrganizationConfigTemplateModel =
  require('./Models/UpdateOrganizationConfigTemplateModel');
const UpdateNetworkDeviceModel = require('./Models/UpdateNetworkDeviceModel');
const ClaimNetworkDevicesModel = require('./Models/ClaimNetworkDevicesModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('./Models/UpdateNetworkCellularFirewallRulesModel');
const ProvisionNetworkClientsModel = require('./Models/ProvisionNetworkClientsModel');
const UpdateNetworkClientPolicyModel = require('./Models/UpdateNetworkClientPolicyModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('./Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const SsidsModel = require('./Models/SsidsModel');
const CombineOrganizationNetworksModel = require('./Models/CombineOrganizationNetworksModel');
const UpdateNetworkSiteToSiteVpnModel = require('./Models/UpdateNetworkSiteToSiteVpnModel');
const HubModel = require('./Models/HubModel');
const SubnetModel = require('./Models/SubnetModel');
const GenerateNetworkCameraSnapshotModel = require('./Models/GenerateNetworkCameraSnapshotModel');
const CreateOrganizationNetworkModel = require('./Models/CreateOrganizationNetworkModel');
const UpdateNetworkModel = require('./Models/UpdateNetworkModel');
const AlertModel = require('./Models/AlertModel');
const UpdateNetworkBluetoothSettingsModel = require('./Models/UpdateNetworkBluetoothSettingsModel');
const UpdateOrganizationAdminModel = require('./Models/UpdateOrganizationAdminModel');
const DefaultDestinationsModel = require('./Models/DefaultDestinationsModel');
const BindNetworkModel = require('./Models/BindNetworkModel');
const CreateOrganizationAdminModel = require('./Models/CreateOrganizationAdminModel');
const NetworkModel = require('./Models/NetworkModel');
const UpdateNetworkAlertSettingsModel = require('./Models/UpdateNetworkAlertSettingsModel');
const CreateOrganizationActionBatchModel = require('./Models/CreateOrganizationActionBatchModel');
const ActionModel = require('./Models/ActionModel');
const UpdateOrganizationActionBatchModel = require('./Models/UpdateOrganizationActionBatchModel');
const TagModel = require('./Models/TagModel');
const UpdateNetworkVlanModel = require('./Models/UpdateNetworkVlanModel');
const ReservedIpRangeModel = require('./Models/ReservedIpRangeModel');
const DhcpOptionModel = require('./Models/DhcpOptionModel');
const UpdateNetworkVlansEnabledStateModel = require('./Models/UpdateNetworkVlansEnabledStateModel');
const UpdateNetworkPortForwardingRulesModel =
  require('./Models/UpdateNetworkPortForwardingRulesModel');
const Rule9Model = require('./Models/Rule9Model');
const CreateNetworkStaticRouteModel = require('./Models/CreateNetworkStaticRouteModel');
const UpdateNetworkStaticRouteModel = require('./Models/UpdateNetworkStaticRouteModel');
const UpdateNetworkUplinkSettingsModel = require('./Models/UpdateNetworkUplinkSettingsModel');
const BandwidthLimits6Model = require('./Models/BandwidthLimits6Model');
const CreateNetworkVlanModel = require('./Models/CreateNetworkVlanModel');
const EncryptionModeEnum = require('./Models/EncryptionModeEnum');
const WpaEncryptionModeEnum = require('./Models/WpaEncryptionModeEnum');
const SplashPageEnum = require('./Models/SplashPageEnum');
const RadiusServerModel = require('./Models/RadiusServerModel');
const RadiusFailoverPolicyEnum = require('./Models/RadiusFailoverPolicyEnum');
const UpdateNetworkSsidModel = require('./Models/UpdateNetworkSsidModel');
const UpdateNetworkSwitchSettingsModel = require('./Models/UpdateNetworkSwitchSettingsModel');
const PowerExceptionModel = require('./Models/PowerExceptionModel');
const UpdateDeviceSwitchPortModel = require('./Models/UpdateDeviceSwitchPortModel');
const CreateNetworkSwitchStackModel = require('./Models/CreateNetworkSwitchStackModel');
const RemoveNetworkSwitchStackModel = require('./Models/RemoveNetworkSwitchStackModel');
const UpdateNetworkSyslogServersModel = require('./Models/UpdateNetworkSyslogServersModel');
const RadiusLoadBalancingPolicyEnum = require('./Models/RadiusLoadBalancingPolicyEnum');
const RadiusAccountingServerModel = require('./Models/RadiusAccountingServerModel');
const RadiusAttributeForGroupPoliciesEnum = require('./Models/RadiusAttributeForGroupPoliciesEnum');
const IpAssignmentModeEnum = require('./Models/IpAssignmentModeEnum');
const ApTagsAndVlanIdModel = require('./Models/ApTagsAndVlanIdModel');
const BandSelectionEnum = require('./Models/BandSelectionEnum');
const UpdateNetworkFirewalledServiceModel = require('./Models/UpdateNetworkFirewalledServiceModel');
const UpdateNetworkOneToManyNatRulesModel = require('./Models/UpdateNetworkOneToManyNatRulesModel');
const Rule7Model = require('./Models/Rule7Model');
const UpdateNetworkOneToOneNatRulesModel = require('./Models/UpdateNetworkOneToOneNatRulesModel');
const Rule8Model = require('./Models/Rule8Model');
const UpdateNetworkDeviceUplinkInterfaceSettingsModel =
  require('./Models/UpdateNetworkDeviceUplinkInterfaceSettingsModel');
const Wan1Model = require('./Models/Wan1Model');
const WanEnabledEnum = require('./Models/WanEnabledEnum');
const Wan2Model = require('./Models/Wan2Model');
const UpdateNetworkContentFilteringModel = require('./Models/UpdateNetworkContentFilteringModel');
const ServerModel = require('./Models/ServerModel');
const UpdateNetworkTrafficShapingModel = require('./Models/UpdateNetworkTrafficShapingModel');
const Rule5Model = require('./Models/Rule5Model');
const UpdateNetworkSsidTrafficShapingModel =
  require('./Models/UpdateNetworkSsidTrafficShapingModel');
const Rule6Model = require('./Models/Rule6Model');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of meraki
    Configuration,
    // controllers of meraki
    NetworksController,
    MVSenseController,
    AlertSettingsController,
    AdminsController,
    ActionBatchesController,
    APIUsageController,
    BluetoothClientsController,
    CamerasController,
    ClientsController,
    ConfigTemplatesController,
    DevicesController,
    MXCellularFirewallController,
    MXL3FirewallController,
    MXL7ApplicationCategoriesController,
    MXL7FirewallController,
    MXVPNFirewallController,
    MRL3FirewallController,
    GroupPoliciesController,
    HTTPServersController,
    MerakiAuthUsersController,
    OpenAPISpecController,
    OrganizationAlertSettingsController,
    OrganizationsController,
    PIIController,
    RadioSettingsController,
    SAMLRolesController,
    SecurityEventsController,
    IntrusionSettingsController,
    MalwareSettingsController,
    GeofenceRegionsController,
    GeofencesController,
    NamedTagScopeController,
    TagsController,
    SMController,
    SplashLoginAttemptsController,
    SplashSettingsController,
    SsidsController,
    SwitchSettingsController,
    SwitchPortsController,
    SwitchStacksController,
    SyslogServersController,
    TrafficShapingController,
    UplinkInterfaceSettingsController,
    WebhookLogsController,
    ContentFilteringCategoriesController,
    ContentFilteringRulesController,
    FirewalledServicesController,
    IDSAlertsController,
    MX1ManyNATRulesController,
    MX11NATRulesController,
    MXPortForwardingRulesController,
    StaticRoutesController,
    UplinkSettingsController,
    VlansController,
    WirelessHealthController,
    // models of meraki
    MoveNetworkSmDevicesModel,
    AuthModeEnum,
    LockNetworkSmDevicesModel,
    CheckinNetworkSmDevicesModel,
    UpdateNetworkSsidsPlashSettingsModel,
    UpdateNetworkSmDevicesTagsModel,
    UpdateNetworkSmDeviceFieldsModel,
    WipeNetworkSmDeviceModel,
    AddNetworkSmProfileUmbrellaModel,
    CreateNetworkSmAppPolarisModel,
    CreateNetworkSmProfileUmbrellaModel,
    UpdateNetworkSmProfileUmbrellaModel,
    UpdateNetworkSmProfileClarityModel,
    AddNetworkSmProfileClarityModel,
    UpdateNetworkSmTagModel,
    CreateNetworkSmProfileClarityModel,
    UpdateNetworkSmTargetGroupModel,
    CreateNetworkSmTagModel,
    UpdateNetworkSmAppPolarisModel,
    UpdateNetworkSmGeofenceRegionModel,
    CreateNetworkSmGeofenceRegionModel,
    AllowedFileModel,
    CreateNetworkSmGeofenceModel,
    UpdateNetworkSmGeofenceModel,
    CreateNetworkSmTargetGroupModel,
    ProtectedNetworksModel,
    WhitelistedRuleModel,
    UpdateNetworkSecurityMalwareSettingsModel,
    AllowedUrlModel,
    AddNetworkSwitchStackModel,
    Tag2Model,
    Network2Model,
    UpdateOrganizationSamlRoleModel,
    UpdateNetworkSecurityIntrusionSettingsModel,
    CreateNetworkPiiRequestModel,
    UpdateNetworkDeviceWirelessRadioSettingsModel,
    CreateOrganizationSamlRoleModel,
    UpdateOrganizationSecurityIntrusionSettingsModel,
    IpsecPoliciesModel,
    UpdateOrganizationThirdPartyVPNPeersModel,
    PeerModel,
    Type5Enum,
    UpdateOrganizationSnmpModel,
    ClaimOrganizationModel,
    UpdateOrganizationAlertSettingsModel,
    DefaultDestinations1Model,
    Alert1Model,
    UpdateOrganizationModel,
    CloneOrganizationModel,
    UpdateNetworkGroupPolicyModel,
    UpdateNetworkHttpServerModel,
    CreateNetworkHttpServersWebhookTestModel,
    CreateOrganizationModel,
    L7FirewallRuleModel,
    Type2Enum,
    CreateNetworkHttpServerModel,
    PerClientBandwidthLimitsModel,
    BandwidthLimits1Model,
    L3FirewallRuleModel,
    TrafficShapingRuleModel,
    Type1Enum,
    BandwidthLimitsModel,
    FirewallAndTrafficShapingModel,
    Settings1Enum,
    DefinitionModel,
    SaturdayModel,
    SundayModel,
    BandwidthModel,
    SettingsEnum,
    TuesdayModel,
    WednesdayModel,
    ThursdayModel,
    FridayModel,
    CreateNetworkGroupPolicyModel,
    SchedulingModel,
    UpdateNetworkSsidL3FirewallRulesModel,
    Rule4Model,
    MondayModel,
    TypeEnum,
    Rule3Model,
    UpdateNetworkL7FirewallRulesModel,
    Rule2Model,
    PolicyEnum,
    UpdateOrganizationVpnFirewallRulesModel,
    Policy1Enum,
    BlinkNetworkDeviceLedsModel,
    RuleModel,
    UpdateNetworkL3FirewallRulesModel,
    UpdateOrganizationConfigTemplateModel,
    UpdateNetworkDeviceModel,
    ClaimNetworkDevicesModel,
    UpdateNetworkCellularFirewallRulesModel,
    ProvisionNetworkClientsModel,
    UpdateNetworkClientPolicyModel,
    UpdateNetworkClientSplashAuthorizationStatusModel,
    SsidsModel,
    CombineOrganizationNetworksModel,
    UpdateNetworkSiteToSiteVpnModel,
    HubModel,
    SubnetModel,
    GenerateNetworkCameraSnapshotModel,
    CreateOrganizationNetworkModel,
    UpdateNetworkModel,
    AlertModel,
    UpdateNetworkBluetoothSettingsModel,
    UpdateOrganizationAdminModel,
    DefaultDestinationsModel,
    BindNetworkModel,
    CreateOrganizationAdminModel,
    NetworkModel,
    UpdateNetworkAlertSettingsModel,
    CreateOrganizationActionBatchModel,
    ActionModel,
    UpdateOrganizationActionBatchModel,
    TagModel,
    UpdateNetworkVlanModel,
    ReservedIpRangeModel,
    DhcpOptionModel,
    UpdateNetworkVlansEnabledStateModel,
    UpdateNetworkPortForwardingRulesModel,
    Rule9Model,
    CreateNetworkStaticRouteModel,
    UpdateNetworkStaticRouteModel,
    UpdateNetworkUplinkSettingsModel,
    BandwidthLimits6Model,
    CreateNetworkVlanModel,
    EncryptionModeEnum,
    WpaEncryptionModeEnum,
    SplashPageEnum,
    RadiusServerModel,
    RadiusFailoverPolicyEnum,
    UpdateNetworkSsidModel,
    UpdateNetworkSwitchSettingsModel,
    PowerExceptionModel,
    UpdateDeviceSwitchPortModel,
    CreateNetworkSwitchStackModel,
    RemoveNetworkSwitchStackModel,
    UpdateNetworkSyslogServersModel,
    RadiusLoadBalancingPolicyEnum,
    RadiusAccountingServerModel,
    RadiusAttributeForGroupPoliciesEnum,
    IpAssignmentModeEnum,
    ApTagsAndVlanIdModel,
    BandSelectionEnum,
    UpdateNetworkFirewalledServiceModel,
    UpdateNetworkOneToManyNatRulesModel,
    Rule7Model,
    UpdateNetworkOneToOneNatRulesModel,
    Rule8Model,
    UpdateNetworkDeviceUplinkInterfaceSettingsModel,
    Wan1Model,
    WanEnabledEnum,
    Wan2Model,
    UpdateNetworkContentFilteringModel,
    ServerModel,
    UpdateNetworkTrafficShapingModel,
    Rule5Model,
    UpdateNetworkSsidTrafficShapingModel,
    Rule6Model,
    // exceptions of meraki
    APIException,
};

module.exports = initializer;
