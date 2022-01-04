// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package operator_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// GetTenantMonitoringOKCode is the HTTP code returned for type GetTenantMonitoringOK
const GetTenantMonitoringOKCode int = 200

/*GetTenantMonitoringOK A successful response.

swagger:response getTenantMonitoringOK
*/
type GetTenantMonitoringOK struct {

	/*
	  In: Body
	*/
	Payload *models.TenantMonitoringInfo `json:"body,omitempty"`
}

// NewGetTenantMonitoringOK creates GetTenantMonitoringOK with default headers values
func NewGetTenantMonitoringOK() *GetTenantMonitoringOK {

	return &GetTenantMonitoringOK{}
}

// WithPayload adds the payload to the get tenant monitoring o k response
func (o *GetTenantMonitoringOK) WithPayload(payload *models.TenantMonitoringInfo) *GetTenantMonitoringOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get tenant monitoring o k response
func (o *GetTenantMonitoringOK) SetPayload(payload *models.TenantMonitoringInfo) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetTenantMonitoringOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*GetTenantMonitoringDefault Generic error response.

swagger:response getTenantMonitoringDefault
*/
type GetTenantMonitoringDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewGetTenantMonitoringDefault creates GetTenantMonitoringDefault with default headers values
func NewGetTenantMonitoringDefault(code int) *GetTenantMonitoringDefault {
	if code <= 0 {
		code = 500
	}

	return &GetTenantMonitoringDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get tenant monitoring default response
func (o *GetTenantMonitoringDefault) WithStatusCode(code int) *GetTenantMonitoringDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get tenant monitoring default response
func (o *GetTenantMonitoringDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get tenant monitoring default response
func (o *GetTenantMonitoringDefault) WithPayload(payload *models.Error) *GetTenantMonitoringDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get tenant monitoring default response
func (o *GetTenantMonitoringDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetTenantMonitoringDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
