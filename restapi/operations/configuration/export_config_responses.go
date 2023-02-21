// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
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

package configuration

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// ExportConfigOKCode is the HTTP code returned for type ExportConfigOK
const ExportConfigOKCode int = 200

/*
ExportConfigOK A successful response.

swagger:response exportConfigOK
*/
type ExportConfigOK struct {

	/*
	  In: Body
	*/
	Payload *models.ConfigExportResponse `json:"body,omitempty"`
}

// NewExportConfigOK creates ExportConfigOK with default headers values
func NewExportConfigOK() *ExportConfigOK {

	return &ExportConfigOK{}
}

// WithPayload adds the payload to the export config o k response
func (o *ExportConfigOK) WithPayload(payload *models.ConfigExportResponse) *ExportConfigOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the export config o k response
func (o *ExportConfigOK) SetPayload(payload *models.ConfigExportResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ExportConfigOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
ExportConfigDefault Generic error response.

swagger:response exportConfigDefault
*/
type ExportConfigDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewExportConfigDefault creates ExportConfigDefault with default headers values
func NewExportConfigDefault(code int) *ExportConfigDefault {
	if code <= 0 {
		code = 500
	}

	return &ExportConfigDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the export config default response
func (o *ExportConfigDefault) WithStatusCode(code int) *ExportConfigDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the export config default response
func (o *ExportConfigDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the export config default response
func (o *ExportConfigDefault) WithPayload(payload *models.Error) *ExportConfigDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the export config default response
func (o *ExportConfigDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ExportConfigDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
