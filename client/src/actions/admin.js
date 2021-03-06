// Functions to help with admin actions.

export const getAdminProfile = (username, profileComp) => {
  const url = `/api/admin/profile/${username}`;

  fetch(url)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      if (json) {
        profileComp.setState({
          firstName: json.firstName,
          lastName: json.lastName,
          email: json.email,
          address: json.address
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};


export const updateAdminProfile = (username, profileComp) => {
  const request = new Request(`/api/admin/profile/${username}`, {
    method: 'PATCH',
    body: JSON.stringify(profileComp.state),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  });

  fetch(request)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      if (json) {
        profileComp.setState({
          firstName: json.firstName,
          lastName: json.lastName,
          email: json.email,
          address: json.address,
          edit: false
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};


export const getAllShoppers = (profileComp) => {
  const url = '/api/shoppers';

  fetch(url)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      if (json) {
        profileComp.setState({ shoppers: json });
      }
    })
    .catch(error => {
      console.log(error);
    });
};


export const getAllStores = (profileComp) => {
  const url = '/api/stores';

  fetch(url)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      if (json) {
        profileComp.setState({ stores: json });
      }
    })
    .catch(error => {
      console.log(error);
    });
};


export const getHelpMessages = (messageComp) => {
  const url = '/api/admin/messages';

  fetch(url)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      if (json) {
        const formattedJson = json.map((message) => {
          const result = { ...message };
          result.date = new Date(result.date).toLocaleString();
          return result;
        });
        messageComp.setState({
          messages: [...formattedJson]
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};


export const addHelpMessage = (state, messageData) => {
  const request = new Request('/api/admin/messages', {
    method: 'post',
    body: JSON.stringify(messageData),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  });

  // Send the request with fetch()
  fetch(request)
    .then(res => {
      return res;
    })
    .then(json => {
      if (json.ok){
        state.setState({
          sent: true
        })
      }
    })
    .catch(error => {
      console.log(error);
    });
};


export const resolveHelpMessage = (id, index, comp) => {
  const request = new Request(`/api/admin/messages`, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  });

  fetch(request)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      if (json) {
        const messages = [...comp.state.messages];
        messages.splice(index, 1);
        comp.setState({
          messages: [...messages]
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
}


export const removeShopper = (username, index, comp) => {
  const request = new Request(`/api/shopper/${username}`, {
    method: 'DELETE',
    body: JSON.stringify({}),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  });

  fetch(request)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      if (json) {
        const shoppers = [...comp.state.shoppers];
        shoppers.splice(index, 1);
        comp.setState({
          shoppers: [...shoppers]
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};


export const getSearchedMessages = (text, messageComp) => {
  const url = '/api/admin/messages';

  fetch(url)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      if (json) {
        const formattedJson = json.map((message) => {
          const result = { ...message };
          result.date = new Date(result.date).toLocaleString();
          return result;
        });
        const jsonFiltered = formattedJson.filter(({ username }) => (username.toUpperCase()).includes(text.toUpperCase()));
        messageComp.setState({
          messages: [...jsonFiltered]
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};


export const removeStore = (username, index, comp) => {
  const request = new Request(`/api/store/${username}`, {
    method: 'DELETE',
    body: JSON.stringify({}),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  });

  fetch(request)
    .then(res => {
      if (res.status === 200) {
        const stores = [...comp.state.stores];
        stores.splice(index, 1);
        comp.setState({
          stores: [...stores]
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};
