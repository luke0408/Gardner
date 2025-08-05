import api from "@luke0408/gardner-api/lib/index";

export const test_api_health = async (
  connection: api.IConnection,
): Promise<void> => {
  await api.functional.health(connection);
};
