module.exports = {
    env: {
        customKey: 'my-value',
        project_region: process.env.project_region,
        cognito_identity_pool_id: process.env.cognito_identity_pool_id,
        cognito_region: process.env.cognito_region,
        user_pools_id: process.env.user_pools_id,
        user_pools_web_client_id: process.env.user_pools_web_client_id,
        appsync_graphqlEndpoint: process.env.appsync_graphqlEndpoint,
        appsync_region: process.env.appsync_region,
        appsync_authenticationType: process.env.appsync_authenticationType,
        user_files_s3_bucket: process.env.user_files_s3_bucket,
        user_files_s3_bucket_region: process.env.user_files_s3_bucket_region,
        mobile_analytics_app_id: process.env.mobile_analytics_app_id,
        mobile_analytics_app_region: process.env.mobile_analytics_app_region,
    },
}
