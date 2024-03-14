import { api } from "@/context/api";
import { getEnv } from "../../utils/getEnv";
/**
 * getToken - get access token for alm
 */

const {
  ALM_CLIENT_ID, ALM_CLIENT_SECRET, ALM_TOKEN_URL, ALM_API_URL,
} = getEnv();

export const getToken = async () => {
  const body = {
    client_id: ALM_CLIENT_ID,
    client_secret: ALM_CLIENT_SECRET,
    code: '',
  };
  const res = await fetch(`${ALM_TOKEN_URL}oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

export const postEnrollCourse = async (loId,loInstanceId) => {
  try {
    const res = await api.post(`enrollments?${new URLSearchParams({ loId })}`);
    return res?.data;
  } catch (err) {
    console.error({ err })
  }
};

export const postBookMarkCourse = async (loId) => {
  try {
    const res = await api.post(`/learningObjects/${loId}/bookmark`);
    return res?.data;
  } catch (err) {
    console.error({ err })
  }
};

export const deleteBookMarkCourse = async (loId) => {
  try {
    const res = await api.delete(`/learningObjects/${loId}/bookmark`);
    return res?.data;
  } catch (err) {
    console.error({ err })
  }
};

export const patchRating = async (loId, body) => {
  try {
    const res = await api.patch(`/enrollments/${loId}/rate`, body);
    return res?.data;
  } catch (err) {
    console.error({ err })
  }
};

export const getCatalogList = async (param) => {
  try {
    const res = await api.get(`catalogs?${new URLSearchParams({ ...param })}`);
    return res?.data;
  } catch (err) {
    console.error({ err })
  }
};
export const getSearchList = async (param) => {
  try {
    const res = await api.get(`search?${new URLSearchParams({ ...param, 'page[limit]': 10 })}`);
    return res?.data;
  } catch (err) {
    console.error({ err })
  }
};

export const searchSuggestions = async (e = '') => {
  try {
    const res = await api.get(`search/suggestions?suggestionType=accountHistory&query=${e}&limit=10`);
    return res?.data;
  } catch (err) {
    console.error({ err })
  }
};

export const getCoursesList = async (param) => {
  try {
    const res = await api.get(`learningObjects?${new URLSearchParams({ ...param })}`);
    return res?.data;
  } catch (err) {
    console.error({ err })
  }
};

export const getCoursesDetails = async (courseId = '', param) => {
  try {
    const res = await api.get(`learningObjects/${courseId}?${new URLSearchParams({ ...param })}`);
    return res?.data;
  } catch (err) {
    console.error({ err })
  }
};

export const getskills = async (id) => {
  try {
    const res = await api.get('skills');
    return res?.data;
  } catch (err) {
    console.error({ err })
  }
};

export const getRecommendations = async (params) => {
  try {
    const tempParams = {
      'strip': 1,
      'page[limit]': 10,
      'omitDeprecated': true,
      'filter.recType': 'peer_group',
      'filter.loTypes': 'course,learningProgram,certification,jobAid',
      'include': 'learningObject.instances,learningObject.skills.skillLevel.skill'
    }
    const actualParams = params || tempParams;
    const response = await api.get(`/recommendations?${new URLSearchParams({ ...actualParams })}`);
    return response.data;
  } catch (exception) {
    console.log("Reached exception block while fetching suggestions :: ", exception);
    return [];
  }
}